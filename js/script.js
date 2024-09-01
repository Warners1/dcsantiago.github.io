let menuIcon=document.querySelector('#menu-icon');
let navBar=document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
 };

 const menuOptions = document.querySelectorAll('.navbar a'); // Adjust the selector as needed

// Add click event to each menu option
menuOptions.forEach(option => {
    option.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('active');
    };
});

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');


// window.onscroll=() => {
//     sections.forEach(sec => {
//         let top=window.scrollY;
//         let offset=sec.offsetTop -150;
//         let height= sec.offsetHeight;
//         let id=sec.getAttribute('id');

//         if(top >= offset && top <offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id +']').classList.add('active');
//             });

//         };
//     });

//     let header = document.querySelector('header');
// header.classList.toggle('sticky',window.scrollY >100);


// menuIcon.classList.remove('bx-x');
// navBar.classList.remove('active');
// };


// const element = document.querySelector('.chessboard');
// element.addEventListener('click',() =>{
//     let elementHTML=document.querySelector('.chesspic');
//     elementHTML.classList.toggle('x');
    
//     elementHTML.innerHTML=`<img src="images/chess2.jpg" class="chesspic" alt="">`;
// });



var i = 0;
let txt = "Hello, I am ";
let txt2 = "DAN CARLO SANTIAGO";
let txt3 = "Backend Developer";
let txt4="Aspiring ";
var speed = 100;


window.onload = function typeWriter() {
    
    
  if (i < txt.length) {
    document.querySelector('.section_text_p1').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  } else if (i >= txt.length && i < txt.length + txt2.length) {
    document.querySelector('.title').innerHTML += txt2.charAt(i - txt.length);
    i++;
    setTimeout(typeWriter, speed);

  } else if (i >= txt.length + txt2.length && i < txt.length + txt2.length + txt3.length) {
    
    document.querySelector('.section_text_s1').innerHTML += txt3.charAt(i - txt.length - txt2.length );
    i++;
    setTimeout(typeWriter, speed);

  }else if (i >= txt.length + txt2.length +txt3.length && i < txt.length + txt2.length + txt3.length +txt4.length){
    document.querySelector('.section_text_p2').innerHTML += txt4.charAt(i - txt.length - txt2.length -txt3.length);
    i++;
    setTimeout(typeWriter, speed);
  }

//   if (i === txt.length + txt2.length + txt3.length + txt4.length) {
    
//  document.querySelector('.icons').style.display = "inline-flex";
//  document.querySelector('.icons2').style.display = "inline-flex";
//  document.querySelector('.icons3').style.display = "inline-flex";

//   }


//    if (i === txt.length + txt2.length + txt3.length + txt4.length) {
//      document.querySelector('.my_pic').src = "./images/smile_nog.png";
//    }
};

