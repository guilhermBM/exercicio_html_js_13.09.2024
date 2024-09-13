const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const form = document.getElementById('form-campos');
let formEValido = false;

function validaCampo(campoA, campoB) {
    let numeroA = Number(campoA.value);
    let numeroB = Number(campoB.value);
    return numeroB > numeroA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso =  `<img src="./images/Eu sabo muito.jpeg" alt="Manja demais tu é doidoo">`;  
    const mensagemErro =   `<p>Achei que você ia acertar Amigo mas não desista*-*!</p> <img src="./images/gato triste.jpeg" alt="achei que você ia acertar ">`;

    formEValido = validaCampo(campoA,campoB);
    
    if (formEValido) {
        const containerImagemSucesso = document.querySelector('.success-message');
        containerImagemSucesso.innerHTML = mensagemSucesso;
        containerImagemSucesso.style.display = 'block';

        document.getElementById("animate_confetti")
        let params = {
            particleCount: 500, // Quantidade de confetes
            spread: 90, // O quanto eles se espalham
            startVelocity: 70, // Velocidade inicial
            origin: { x: 0, y: 0.5 }, // Posição inicial na tela
            angle: 45 // Ângulo em que os confetes serão lançados
        };
    
        // Joga confetes da esquerda pra direita
        confetti(params);
    
        // Joga confetes da direita para a esquerda
        params.origin.x = 1;
        params.angle = 135;
        confetti(params);
        
        campoA.value = '';
        campoB.value = ''; 

        setTimeout(() => {
            containerImagemSucesso.style.display = 'none';
        },3500);
    }
    else {
        const containerImagemErro = document.querySelector('.error-message');
        containerImagemErro.innerHTML = mensagemErro;
        containerImagemErro.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

        setTimeout(() => {
            containerImagemErro.style.display = 'none';
        }, 3500);
    }

})
