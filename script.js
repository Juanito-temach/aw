function celebrate() {
    const card = document.querySelector('.card');
    const messages = document.querySelectorAll('.message');

    // Cambiar el estado de la carta
    card.classList.toggle('open');

    // Mostrar los mensajes de cumpleaños
    if (card.classList.contains('open')) {
        messages.forEach(message => {
            message.classList.add('show');
        });
    } else {
        messages.forEach(message => {
            message.classList.remove('show');
        });
    }
}
