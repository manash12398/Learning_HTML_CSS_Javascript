const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click', ()=>{
    createnotifiaction();
})

function createnotifiaction(){
    const notify = document.createElement('div');
    notify.classList.add('toast');

    notify.innerText="This challenge is badass!";

    container.appendChild(notify);

    setTimeout(()=> {
        notify.remove();
    }, 3000);
}