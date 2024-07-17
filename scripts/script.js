document.addEventListener('DOMContentLoaded', function() {
    // Переключатель
    const switchButtons = document.querySelectorAll('.switch-btn');
    switchButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('switch-on');
      });
    });
  
    // Слайдер
    const slider = document.getElementById("myRange");
    const output = document.getElementById("demo");
    // output.innerHTML = slider.value; // Отображение начального значения слайдера
  
    // slider.oninput = function() {
    //   output.innerHTML = this.value;
    // }
});




// $(document).ready(function(){

//     $('.switch-btn').click(function(){
//         $(this).toggleClass('switch-on');
//     });

//     var slider = document.getElementById("myRange");
//     var output = document.getElementById("demo");
//     output.innerHTML = slider.value; // Display the default slider value

//     // Update the current slider value (each time you drag the slider handle)
//     slider.oninput = function() {
//         output.innerHTML = this.value;
//     }

// })

// document.addEventListener('DOMContentLoaded', function() {
//     const switchButtons = document.querySelectorAll('.switch-btn');
  
//     switchButtons.forEach(button => {
//       button.addEventListener('click', function() {
//         this.classList.toggle('switch-on');
//       });
//     });
//   });