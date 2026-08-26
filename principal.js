// Ideias pegas do Chatgpt

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let section = document.querySelector('section')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    footer.classList.toggle('dark')
    section.classList.toggle('dark')

    document.header.classList.toggle("dark");
})

// ===================================

const contadores = document.querySelectorAll('.box-numero');

contadores.forEach((contador) => {
    const valorFinal = Number(contador.dataset.target);
    let valorAtual = 0;

    const intervalo = setInterval(() => {
        valorAtual++;

        contador.textContent = valorAtual;

        if (valorAtual >= valorFinal) {
            clearInterval(intervalo);
        }
    }, 20);
});
// ===================================

const caixas = document.querySelectorAll('.transparente');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('aparecer');
        }
    });
}, {
    threshold: 0.2
});

caixas.forEach((caixa) => {
    observer.observe(caixa);
});