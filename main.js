const accordion = document.getElementsByClassName('accordion');

let i;

//  normal function
// for(i=0; i<accordion.length; i++){
//     accordion[i].addEventListener('click', function(){
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if(panel.style.display === 'block'){
//             panel.style.display = 'none'
//         } else {panel.style.display = 'block'}

//     })

// }

// with arrow function

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
      accordion[i].classList.toggle("active");
      var panel = accordion[i].nextElementSibling;
      console.log(panel);
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }
