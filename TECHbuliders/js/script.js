document.addEventListener('DOMContentLoaded', function() {
    const animationElement = document.getElementById('text');
    const text = "ProjetoAutomação";

    // Função para adicionar cada letra com uma classe de animação
    function addLetters() {
        for (let i = 0; i < text.length; i++) {
            const letter = document.createElement('span');
            letter.textContent = text[i];
            letter.classList.add('letter');
            letter.style.animationDelay = `${i * 0.3}s`; // Atraso na animação para criar o efeito de queda escalonada
            animationElement.appendChild(letter);
        }
    }

    // Inicia a animação
    addLetters();
});