var presentation = $('.bouton');

$('#show').click(function(){
	if($('.bouton').hasClass("hidden")){
	$('.bouton').removeClass('hidden').delay( 5000 );
	} else{
		$('.bouton').addClass('hidden');
	}
})

// $('#show').click(function(){
// 	if($('.bouton').hasClass("hidden")){
// 	$('.bouton').show(5000);
// 	} 
// })

  var animTime = 300,
      clickPolice = false;
  
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


/* Set values + misc */
var promoCode;
var promoPrice;
var fadeTime = 300;

/* Assign actions */
$('.quantity input').change(function() {
  updateQuantity(this);
});

$('.remove button').click(function() {
  removeItem(this);
});

$(document).ready(function() {
  updateSumItems();
});

$('.promo-code-cta').click(function() {

  promoCode = $('#promo-code').val();

  if (promoCode == 'BECODE' || promoCode == 'becode') {
    //If promoPrice has no value, set it as 10 for the 10OFF promocode
    if (!promoPrice) {
      promoPrice = 10;
    } else if (promoCode) {
      promoPrice = promoPrice * 1;
    }
  } else if (promoCode != '') {
    alert("Code promo invalide");
    promoPrice = 0;
  }
  //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
  if (promoPrice) {
    $('.summary-promo').removeClass('hide');
    $('.promo-value').text(promoPrice.toFixed(2));
    recalculateCart(true);
  }
});

/* Recalculate cart */
function recalculateCart(onlyTotal) {
  var subtotal = 0;

  /* Sum up row totals */
  $('.basket-product').each(function() {
    subtotal += parseFloat($(this).children('.subtotal').text());
  });

  /* Calculate totals */
  var total = subtotal;

  //If there is a valid promoCode, and subtotal < 10 subtract from total
  var promoPrice = parseFloat($('.promo-value').text());
  if (promoPrice) {
    if (subtotal >= 10) {
      total -= promoPrice;
    } else {
      alert('La commande doit être supérieure à 10 € pour que le code promo s\'applique.');
      $('.summary-promo').addClass('hide');
    }
  }

  /*If switch for update only total, update only total display*/
  if (onlyTotal) {
    /* Update total display */
    $('.total-value').fadeOut(fadeTime, function() {
      $('#basket-total').html(total.toFixed(2));
      $('.total-value').fadeIn(fadeTime);
    });
  } else {
    /* Update summary display. */
    $('.final-value').fadeOut(fadeTime, function() {
      $('#basket-subtotal').html(subtotal.toFixed(2));
      $('#basket-total').html(total.toFixed(2));
      if (total == 0) {
        $('.checkout-cta').fadeOut(fadeTime);
      } else {
        $('.checkout-cta').fadeIn(fadeTime);
      }
      $('.final-value').fadeIn(fadeTime);
    });
  }
}

/* Update quantity */
function updateQuantity(quantityInput) {
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children('.subtotal').each(function() {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });

  productRow.find('.item-quantity').text(quantity);
  updateSumItems();
}

function updateSumItems() {
  var sumItems = 0;
  $('.quantity input').each(function() {
    sumItems += parseInt($(this).val());
  });
  $('.total-items').text(sumItems);
}

/* Remove item from cart */
function removeItem(removeButton) {
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
    updateSumItems();
  });
}



// $('.tabs .tab-links a').on('click', function(e)  {
// var currentAttrValue = $(this).attr('href');
// // Show/Hide Tabs
// $('.tabs ' + currentAttrValue).show().siblings().hide();
// // Change/remove current tab to active
// $(this).parent('li').addClass('active').siblings().removeClass('active');
// e.preventDefault();
// });







// Bouton Filtre , Gérés de manière dynamique
// var button = document.querySelector('#button-parent'); // Selection du parent pour connaitre la longueur de l'array des boutons
// var filterBtnArray = document.querySelectorAll('.btn_section'); //Selectionne tout les boutons avec la class btn_section
// var btnArray = []; // création d'un array vide
// var statutGenre ="";
// var shopVideos = [
// "https://www.youtube.com/embed/JNwNXF9Y6kY", //Star Wars
// "https://www.youtube.com/embed/TElJs93LLs8", //Grave
// "https://www.youtube.com/embed/LEH7nDkiPEk", //Survive Style 5
// "https://www.youtube.com/embed/RMhbr2XQblk", //Gran Torino
// "https://www.youtube.com/embed/4TLppsfzQH8", //Limitless
// "https://www.youtube.com/embed/yfDUv3ZjH2k", //Shaun of the dead
// "https://www.youtube.com/embed/znmZoVkCjpI", //Seven
// "https://www.youtube.com/embed/hFY-f7BXwZw", //Swiss army man
// ]

// var triGenreUp = function (x){
//   $('.'+x).not('.hide').removeClass('d-none');
//   $('.'+x).not('.hide').addClass('d-block');
//   if ( $('.vignettes').not("."+x)){
//     $('.vignettes').not("."+x).removeClass('d-block');
//     $('.vignettes').not("."+x).addClass('d-none');
//   }
// }
// var triGenreDown = function (y){
//   $('.vignettes').removeClass('d-none');
//   $('.vignettes').addClass('d-block');
//   if ( $('.vignettes').not("."+y)){
//     $('.vignettes').not("."+y).removeClass('d-block');
//     $('.vignettes').not("."+y).addClass('d-none');
//   }
// }

// for (i=0;i<button.children.length;i++){ //début de boucle for sur la longueur de l'array des enfants grâce à "l'encre" du parent
//   var filterBtnContent = document.querySelectorAll('.btn_section')[i].innerHTML; // Selectionne chaque bouton pour en connaitre le contenu HTML pour créer les genres présents dans l'array créé
//   btnArray.push(filterBtnContent);} // Stocke chaque value dans l'array

// //Function + et - de films , séries à venir
// $("#btnplusfilm").click(function(event) {
//   if ($('#btnplusfilm').html() === "Plus de Films" && statutGenre === "") {
//     $('.hide').addClass('d-block');
//     $('.hide').removeClass('d-none');
//     $('#btnplusfilm').html("Moins de Films");
//   } else if ($('#btnplusfilm').html() === "Plus de Films" && statutGenre != ""){
//     if ($('.vignettes').hasClass(statutGenre)){
//       $('.vignettes').addClass('d-none');
//       $('.vignettes').removeClass('d-block');
//       $('.'+statutGenre).addClass('d-block');
//       $('.'+statutGenre).removeClass('d-none');
//       $('#btnplusfilm').html("Moins de Films");}
//   } else if ($('#btnplusfilm').html() === "Moins de Films" && statutGenre === ""){
//     $('.hide').addClass('d-none');
//     $('.hide').removeClass('d-block');
//     $('#btnplusfilm').html("Plus de Films");
//   }else if ($('#btnplusfilm').html() === "Moins de Films" && statutGenre != ""){
//     if ($('.vignettes').hasClass(statutGenre)){
//       $('.hide').addClass('d-none');
//       $('.hide').removeClass('d-block');
//       $('#btnplusfilm').html("Plus de Films");}
//   }
// });

// //Function tri
// $('.btn_section').click(function() {
// if ($('#btnplusfilm').html() === "Plus de Films"){
//   if (btnArray[($(this).val())-1] === "All"){ // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
//     statutGenre = "";
//     if ($('.vignettes').not('.hide')){
//       $('.vignettes').removeClass('d-none');
//       $('.vignettes').addClass('d-block');
//       $('.hide').removeClass('d-block');
//       $('.hide').addClass('d-none');
//     }
//   }
//   else if (btnArray[($(this).val())-1] === "Thriller"){
//     statutGenre = "Thriller";
//     triGenreUp(statutGenre);
//     }
//   else if (btnArray[($(this).val())-1] === "Policiers"){
//     statutGenre = "Policiers";
//     triGenreUp(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Comedie"){
//     statutGenre = "Comedie";
//     triGenreUp(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Scifi"){
//     statutGenre = "Scifi";
//     triGenreUp(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Dramatique"){
//     statutGenre = "Dramatique";
//     triGenreUp(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Aventure"){
//     statutGenre = "Aventure";
//     triGenreUp(statutGenre);
//   }
//   else {
//     if ($('.vignettes').not('.hide')){
//       $('.vignettes').removeClass('d-none');
//       $('.vignettes').addClass('d-block');
//   }
//   }
// }
// else if($('#btnplusfilm').html() === "Moins de Films"){
//   if (btnArray[($(this).val())-1] === "All"){ // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
//       statutGenre="";
//       $('.vignettes').removeClass('d-none');
//       $('.vignettes').addClass('d-block');
//       $('.hide').removeClass('d-block');

//       $('.hide').addClass('d-none');
//   }
//   else if (btnArray[($(this).val())-1] === "Thriller"){
//     statutGenre="Thriller";
//     triGenreDown(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Policiers"){
//     statutGenre="Policiers";
//     triGenreDown(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Comedie"){
//     statutGenre="Comedie";
//     triGenreDown(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Scifi"){
//     statutGenre="Scifi";
//     triGenreDown(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Dramatique"){
//     statutGenre="Dramatique";
//     triGenreDown(statutGenre);
//   }
//   else if (btnArray[($(this).val())-1] === "Aventure"){
//     statutGenre="Aventure";
//     triGenreDown(statutGenre);
//   }
//   else {
//     if ($('.vignettes').hasClass('hide'))
//     $('.hide').removeClass('d-none');
//     $('.hide').addClass('d-block');
//   }
//   }
// })

