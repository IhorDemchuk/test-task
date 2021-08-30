$(document).ready(function () {

   //Fertilizer Calculator

   $('#choose_culture, #capacity, #fertilizer_price, #sown_area').on('change', function () {
      sum();
   })

   function sum() {
      let choose_culture = $('#choose_culture').val();
      let capacity = $('#capacity').val();
      let fertilizer_price = $('#fertilizer_price').val();
      let sown_area = $('#sown_area').val();

      let sum = (((choose_culture / 100) * capacity) * sown_area) - (sown_area * fertilizer_price);

      $({ countNum: $('.profit_value').text() }).animate({
         countNum: sum
      }
         ,
         {
            duration: 500,
            easing: 'swing',
            step: function () {
               $('.profit_value').text(Math.floor(this.countNum));
            },
            complete: function () {
               $('.profit_value').text(this.countNum)
            }
         }

      )
      $('.fertilizer_calculator_middle input[required]').addClass('error_border');

      if (sum <= -1) {
         $('.error_text').text('Вы в убытке:( Заполните все поля').animate({ opacity: 1 }, 900);
      } else {
         $('.error_text').animate({ opacity: 0 }, 50);
      }

   }

   //Fertilizer Calculator

})