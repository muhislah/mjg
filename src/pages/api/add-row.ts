// pages/api/add-row.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { format } from 'date-fns';
import nodemailer from 'nodemailer'

type SheetRequestBody = {
    name: string;
    email: string;
    phone: string
    product: string;
    description: string
};

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "service.mujijayagaharu@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
})

interface IMailData {
    to: string,
    subject: string,
}

export const sendMail = (data: IMailData & {
    date: string,
    name: string,
    email: string,
    phone: string,
    followUpLink: string,
    product: string,
    description: string
}) => {
    const message = {
        from: "service.mujijayagaharu@gmail.com",
        to: data.to,
        subject: data.subject,
        text: "Ada order baru",
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #2c3e50;">📦 Order Baru</h2>
                <p><strong>Tanggal:</strong> ${data.date}</p>
                <p><strong>Nama:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Telepon:</strong> ${data.phone}</p>
                <p><strong>Produk:</strong> ${data.product}</p>
                <p><strong>Deskripsi:</strong><br/> ${data.description}</p>
                <p><strong>Tindak Lanjut:</strong> <a href="${data.followUpLink}" target="_blank">Klik di sini</a></p>
            </div>
        `
    }

    return transporter.sendMail(message);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, phone, product, description } = JSON.parse(req.body) as SheetRequestBody;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const pretext = `Hallo ${name}, kami mau mengkonfirmasi terkait pesanan dengan: \n\nCode : "${product}"\nDeskripsi: ${description}\n\nApakah pesanan tersebut sudah benar?`
        const followUpLink = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(pretext)}`

        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = process.env.GOOGLE_SHEET_ID as string;
        const range = 'Enquiries!A:G'; // Adjust based on your sheet
        const date = format(new Date(), 'dd-MM-yyyy HH:mm')

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[date, name, email, phone, followUpLink, product, description]],
            },
        });

        await sendMail({
            date,
            description,
            email,
            followUpLink,
            name,
            phone,
            product,
            subject: "Ada Order Masuk",
            to: `ptmujijayagaharuoud@gmail.com`
        })

        return res.status(200).json({ message: 'Row added successfully.' });
    } catch (err) {
        console.error('Google Sheets error:', err);
        return res.status(500).json({ error: 'Failed to append row.' });
    }
}
