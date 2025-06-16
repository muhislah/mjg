import nodemailer from 'nodemailer'

export function sendWhatsApp(phoneNumber: string, message: string = '') {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

export const openLink = (url: string, isNewTab?: boolean) => {
    const link = document.createElement('a')
    link.href = url
    if (isNewTab) {
        link.setAttribute('target', `_blank`)
        link.setAttribute('rel', `noopener norefferrer`)
    }
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}