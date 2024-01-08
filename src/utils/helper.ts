export function sendWhatsApp(phoneNumber: string, message: string = '') {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}  