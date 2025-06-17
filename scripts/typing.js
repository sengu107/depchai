document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi, I'm Senchan";
    const typingElement = document.getElementById('typing-text');
    let idx = 0;

    function typeWriter() {
        if (typingElement && idx <= text.length) {
            typingElement.textContent = text.slice(0, idx);
            idx++;
            setTimeout(typeWriter, 90);
        }
    }

    typeWriter();
});
