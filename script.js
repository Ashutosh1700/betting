function shareToWhatsApp() {
    const phoneNumber = "7607116082"; // Replace with the target phone number
    const message = encodeURIComponent("Join the festival of winnings and get a 600% IPL Welcome Bonus! Check it out now!");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}
