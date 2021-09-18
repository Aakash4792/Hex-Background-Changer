const button = document.querySelector('button');
const web = document.querySelector('html');
const text = document.querySelector('.text');
const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

button.addEventListener('click',e=>{
    let color = '#';
    for(let i = 0; i  < 6; i++){
        let index = Math.floor(Math.random()*16);
        color += chars[index];
    }
    text.textContent = `${color}`;
    web.style.backgroundColor = color; 
})