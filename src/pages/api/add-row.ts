// pages/api/add-row.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { format } from 'date-fns';

type SheetRequestBody = {
    name: string;
    email: string;
    phone: string
    product: string;
    description: string
};

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

        const pretext = `Hallo ${name}, kami mau mengkonfirmasi terkait pesanan dengan code "${product}" ini apakah sudah benar?`
        const followUpLink = `https://wa.me/${phone.replace('+', '')}&text=${encodeURIComponent(pretext)}`

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

        return res.status(200).json({ message: 'Row added successfully.' });
    } catch (err) {
        console.error('Google Sheets error:', err);
        return res.status(500).json({ error: 'Failed to append row.' });
    }
}
