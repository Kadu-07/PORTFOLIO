function enviarFormulario(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const texto = `Olá! Me chamo *${nome}* (${email}).\n\n${mensagem}`;
    const url = `https://wa.me/5551990157080?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}