let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let header = document.querySelector('header')
let footer = document.querySelector('footer')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    footer.classList.toggle('dark')
    document.header.classList.toggle("dark");
})