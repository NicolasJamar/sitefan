var animTime = 300;
var clickPolice = false;

// ACCORDEON
  $(document).on('touchstart click', '.acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn'),
          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();
   
      $('.acc-btn h3').removeClass('selected');
      $(this).find('h3').addClass('selected');
      
      $('.acc-content').stop().animate({ height: 0 }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });

// <button id="btn+1">+</button>
// <button id="btn-1">-</button> : 
// <input type="text" class="quantity" id="qt1" name="qt1" value="0">
// <span id="tot1">0 €</span>

var price = parseFloat($("#prc1").text());
var quantity = $("#qt1").val();

function sousTotal(){
  $('#calculate').click()


  alert(quantity*price);
}

sousTotal();


/* Set values + misc */
// var promoCode;
// var promoPrice;
// var fadeTime = 300;

// /* Assign actions */
// $('.quantity input').change(function() {
//   updateQuantity(this);
// });

// $('.remove button').click(function() {
//   removeItem(this);
// });

// $(document).ready(function() {
//   updateSumItems();
// });

// $('.promo-code-cta').click(function() {

//   promoCode = $('#promo-code').val();

//   if (promoCode == 'BECODE' || promoCode == 'becode') {
//     //If promoPrice has no value, set it as 10 for the 10OFF promocode
//     if (!promoPrice) {
//       promoPrice = 10;
//     } else if (promoCode) {
//       promoPrice = promoPrice * 1;
//     }
//   } else if (promoCode != '') {
//     alert("Code promo invalide");
//     promoPrice = 0;
//   }
//   //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
//   if (promoPrice) {
//     $('.summary-promo').removeClass('hide');
//     $('.promo-value').text(promoPrice.toFixed(2));
//     recalculateCart(true);
//   }
// });

// /* Recalculate cart */
// function recalculateCart(onlyTotal) {
//   var subtotal = 0;

//   /* Sum up row totals */
//   $('.basket-product').each(function() {
//     subtotal += parseFloat($(this).children('.subtotal').text());
//   });

//   /* Calculate totals */
//   var total = subtotal;

//   //If there is a valid promoCode, and subtotal < 10 subtract from total
//   var promoPrice = parseFloat($('.promo-value').text());
//   if (promoPrice) {
//     if (subtotal >= 10) {
//       total -= promoPrice;
//     } else {
//       alert('La commande doit être supérieure à 10 € pour que le code promo s\'applique.');
//       $('.summary-promo').addClass('hide');
//     }
//   }

//   /*If switch for update only total, update only total display*/
//   if (onlyTotal) {
//      Update total display 
//     $('.total-value').fadeOut(fadeTime, function() {
//       $('#basket-total').html(total.toFixed(2));
//       $('.total-value').fadeIn(fadeTime);
//     });
//   } else {
//     /* Update summary display. */
//     $('.final-value').fadeOut(fadeTime, function() {
//       $('#basket-subtotal').html(subtotal.toFixed(2));
//       $('#basket-total').html(total.toFixed(2));
//       if (total == 0) {
//         $('.checkout-cta').fadeOut(fadeTime);
//       } else {
//         $('.checkout-cta').fadeIn(fadeTime);
//       }
//       $('.final-value').fadeIn(fadeTime);
//     });
//   }
// }

// /* Update quantity */
// function updateQuantity(quantityInput) {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children('.price').text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;

//   /* Update line price display and recalc cart totals */
//   productRow.children('.subtotal').each(function() {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });

//   productRow.find('.item-quantity').text(quantity);
//   updateSumItems();
// }

// function updateSumItems() {
//   var sumItems = 0;
//   $('.quantity input').each(function() {
//     sumItems += parseInt($(this).val());
//   });
//   $('.total-items').text(sumItems);
// }

// /* Remove item from cart */
// function removeItem(removeButton) {
//   /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//     updateSumItems();
//   });
// }

