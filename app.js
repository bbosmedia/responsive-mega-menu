const bar = document.querySelector('.menu-icons')
const navList = document.querySelector('.nav-list')


bar.addEventListener('click', () =>{
    navList.classList.toggle('active')
    bar.classList.toggle('active')
})