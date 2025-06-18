
//para validação ou feedback em JS
const form = document.getElementById('form-contato');
form.addEventListener('submit',function (e) {
    e.preventDefault();
    alert('Mensagem enviada!');
    form.reset();
});
function mudaFoto (foto)
{
    document.getElementById("menu").src = foto;
}