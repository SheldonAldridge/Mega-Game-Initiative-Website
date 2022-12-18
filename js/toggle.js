let contact = document.querySelector(".contact")
let email = document.querySelector(".email")

contact.addEventListener("click",(e) =>{
    e.preventDefault();
    email.classList.toggle("dispaly");
})

