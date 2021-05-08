var atualizar = setInterval(horario, 1000);


function horario() {

    const data = new Date();
    const hora = data.toLocaleString().slice(12);
    const mgs = document.querySelector('div#msg');
    const img = document.querySelector('img#img');

    if (hora < 12) {
        msg.textContent = `Agora são exatamente ${hora}`;
        img.src = './_imagens/manha.png';
    } else if (hora < 18) {
        msg.textContent = `Agora são exatamente ${hora}`;
        img.src = './_imagens/tarde.png';
    } else {
        msg.textContent = `Agora são exatamente ${hora}`;
        img.src = './_imagens/noite.png';
    }
}
