var question = document.querySelectorAll(".question");

  for (var i = 0; i < question.length; i++) {
    console.log(question[i])
    var resposta = question[i];

    resposta.addEventListener('click' ,function(e) {
     let respost = e.target.parentNode.querySelector(".answer")
     let arrow = e.target.parentNode.querySelector(".arrow")
     respost.classList.toggle("hide")
     
     
      })
  }

 
  

// Tentativas de codigos

// question.addEventListener('click', function(){
//    let respost = document.querySelector('.answer');
//     respost.classList.toggle("hide")

// })












// var question = document.querySelectorAll(".question");

//   for (var i = 0; i < question.length; i++) {
//     console.log(question[i])
//     var resposta = question[i];

//     resposta.addEventListener('click' ,function(e) {
//       var question1 = e.target.parentNode.querySelector("li")
//       var question2 = e.target.parentNode.querySelector("li")
//       var question3 = e.target.parentNode.querySelector("li")
//        question1.classList.toggle("hide")
//        question2.classList.toggle("hide")
//        question3.classList.toggle("hide")      
//       })
//   }

























// let question = document.querySelectorAll('.questions_answer__accordion .question')

// question.addEventListener('click', function(){
//    let respost = document.querySelectorAll('.questions_answer__accordion .answer')
//     respost.classList.toggle("hide")

// })






// let question = document.querySelector('.question');

// question.addEventListener('click',()=>{
//    let respost = document.querySelector('.answer');
//     respost.classList.toggle("hide")

// })























// let quest = document.querySelector(".question")
// let ans = document.querySelector(".answer")

// quest.addEventListener("click",aparecer)
// ans.addEventListener('click', esconder)
// function esconder(){
//     let ans = document.querySelector(".answer")
//     ans.style.display = "none"
// }
// function aparecer(){
//     let ans = document.querySelector(".answer")
//     ans.style.display = "block"
// }
// function h1click(){
//         2ª solução
//     var x, i;
//      x = document.querySelectorAll(".answer");
//     for (i = 0; i < x.length; i++) {
//     x[i].style.display = "block";
//     }
    
//         1ª solução
//     let quest = document.querySelector(".answer")
//     quest.style.display = "block"
// }





//CERTO
// var question = document.querySelectorAll(".questions_answer__accordion");

//   for (var i = 0; i < question.length; i++) {
//     console.log(question[i])
//     var resposta = question[i];

//     resposta.addEventListener('click' ,function(e) {
//      let respost = e.target.parentNode.querySelector(".answer")
//      respost.classList.toggle("hide")
     
//       })
//   }