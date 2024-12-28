var typed = new Typed('#element', {
    strings: ['Larry Daniels', 'Developer', 'Designer'],
    typeSpeed: 100,
    backspeed:100,
    loop:true
  });


  // navbar change 
  jQuery(function($){
    var $navbar = $('.navbar');
    $(window).scroll(function(event){
      var current = $(this).scrollTop();
      if(current > 770){
        $navbar.addClass('navbar-color');
        // $navbar.addClass('navbar-color');
      }else{
        $navbar.removeClass('navbar-color');

      }
    });
  });


// let counterEl = document.querySelectorAll('counter');
// let counterNumber = 0;
// const updateConter = setInterval(function(){
//   counterNumber++;
//   counterEl.textcontent = counterNumber;
//   if(counterNumber>= 850){
//     clearInterval(updateConter);
    
//   }


// })









// valueDiplays.forEach(valueDiplay =>{
//   let startValue = 0;
//   let endValue = parseInt(valueDiplays.getAttribute('data-val'));
//   console.log(endValue)
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function(){
//     startValue +=1;
//     valueDiplay.textContent = startValue;
//     if(startValue == endValue){
//       clearInterval(counter);
//     } 
//   },duration);

// });