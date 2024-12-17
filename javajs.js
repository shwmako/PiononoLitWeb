// Obtén todos los botones de las preguntas
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Encuentra el contenedor del item de la pregunta
        const faqItem = this.closest('.faq-item');
        
        // Si la pregunta ya está abierta, la cerramos
        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active');
        } else {
            // Si no está abierta, primero cerramos todas las preguntas abiertas
            document.querySelectorAll('.faq-item.active').forEach(openFaqItem => {
                openFaqItem.classList.remove('active');
            });
            // Ahora abrimos la respuesta de la pregunta actual
            faqItem.classList.add('active');
        }
    });
});