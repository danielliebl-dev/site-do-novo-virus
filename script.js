// Selecionando os elementos HTML
const btnCurtir = document.getElementById('btn-curtir');
const contadorCurtidas = document.getElementById('contador-curtidas');
const btnAlerta = document.getElementById('btn-alerta');

let totalCurtidas = 0;

// Função para o botão de curtir
btnCurtir.addEventListener('click', () => {
    totalCurtidas++;
    contadorCurtidas.textContent = totalCurtidas;
    
    // Pequeno efeito visual de clique no botão
    btnCurtir.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btnCurtir.style.transform = 'scale(1)';
    }, 100);
});

// Função para o botão de alertas
btnAlerta.addEventListener('click', () => {
    alert('⚽ Inscrição realizada! Você receberá as notificações da Copa direto no seu navegador.');
});
