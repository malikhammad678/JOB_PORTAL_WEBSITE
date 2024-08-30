let menubtn = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar')


menubtn.onclick = () => {
    menubtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menubtn.classList.remove('bx-x');
    navbar.classList.remove('active');
}


let dropdown_items = document.querySelector('.job-filter form .dropdown-container .dropdown .list .items')

dropdown_items.forEach(items => {
    items.onclick = () => {
        items_parent = items.parentElement.parentElement;
        let output = items_parent.querySelector('.outpute')
        output.value = items.innerText;
    }
})


document.querySelectorAll('input[type="number"]').forEach(inputnumber => {
    inputnumber.oninput = () => {
        if(inputnumber.value.lenght > inputnumber.maxLenght) inputnumber.value = inputnumber.value.slice(0,inputnumber.maxLenght);
    }
})

