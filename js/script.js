/*====================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};  



/*==================== scroll section ==========================*/
let sections = document.querySelectorAll('section');
let navLinks = document. querySelectorAll('header nav a');

window.onscroll = ()  => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
         if(top >= offset && top < offset+ height) {
          navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

          });
         };
    });

    

/*======================= sticky navbar =======================*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
    
    
/*======================= remove toggle icon and navbar when click navbar links (scroll) =======================*/   
     menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



};

    
/*========================== send email to gmail ================================*/  

const form = document.querrySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document .getElementById("message");

function sendEmail() {
   const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
    Host : "smpt.elasticemail.com",
    Username : "phumzilemzayifani@gmail.com",
    Password : "34488D8717BAA1E71BB67716E4804522F90A",
    To : 'phumzilemzayifani@gmail.com',
    From : "phumzilemzayifani@gmail.com",
    Subject: subject.value,
    Body : bodyMessage
}).then(
  message => alert(message)
); 

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});


   







