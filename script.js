function shareToWhatsApp() {
    const phoneNumber = "7376947631"; // Replace with the target phone number
    const message = encodeURIComponent("Hi I want to Play!");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}
