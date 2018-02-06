// ACCORDEON
var animTime = 300;  
var clickPolice = false; 

//GOODIES
var price = parseFloat($("#prc1").html());
var quantityB = $('#qt').val();
var quantity = $("#qt").val();


// ONGLETS
(function onglets() {
    /*
    LORSQUE l'on clique sur un onglet
        * ON RETIRE la class active de l'onglet actif
        * J'ajoute la class active à l'onglet actuel

        ON retire la class active sur le contenu actif
        j'ajoute la class active sur le contenu correspondant à mon clic
    */

    var afficherOnglet = function (a, animations) {
        if (animations === undefined) {
            animations = true
        }
        var li = a.parentNode
        var div = a.parentNode.parentNode.parentNode
        var activeTab = div.querySelector('.tab-contents.active')  // contenu actif
        var aAfficher = div.querySelector(a.getAttribute('href')) // contenu à afficher

        if(li.classList.contains('active')){
            return false
        }

        div.querySelector('.tabs .active').classList.remove('active')
        li.classList.add('active')

        if (animations) {
            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            var transitionend = function () {
                this.classList.remove('fade')
                this.classList.remove('active')
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.offsetWidth
                aAfficher.classList.add('in')
                this.removeEventListener('transitionend', transitionend)
                this.removeEventListener('webkitTransitionEnd', transitionend)
                this.removeEventListener('oTransitionEnd', transitionend)
                this.removeEventListener('mozTransitionEnd', transitionend)
            }
            activeTab.addEventListener('transitionend', transitionend)
            activeTab.addEventListener('webkitTransitionEnd', transitionend)
            activeTab.addEventListener('oTransitionEnd', transitionend)
            activeTab.addEventListener('mozTransitionEnd', transitionend)
        } else {
            aAfficher.classList.add('active')
            activeTab.classList.remove('active')
        }
        // On ajoute la class fade sur l'élément actif
        // A la fin de l'animation
        //     On retire la class fade et active
        //     On ajoute la class active et fade à l'élément à afficher
        //     ON ajoute la class in
    }

    var tabs = document.querySelectorAll('.tabs a')
    for (var i = 0; i < tabs.length; i++){
        tabs[i].addEventListener('click', function (e) {
            afficherOnglet(this)
        })
    }
})
();


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


// GOODIES : CALCUL PRIX
// input type='button'

    //Bouton Plus
$('#btnPlus1').click(function(){
    quantity ++;
    $('#qt').val(quantity);

});

    //Bouton Moins
$('#btnMoins1').click(function(){
    quantity -=1;
   
    if (quantity < 0){
    alert("Vous ne pouvez pas commander moins que 0 !")    
    quantity ++;
    };
    
     $('#qt').val(quantity);
});

$('#calculate').click(function(){

    var quantity = $("#qt1").val();
    alert(quantity*price);

  });


// FORMULAIRE DE CONTACT
$('#submitForm').click(function(){
    var formControl = [
    $('#validationCustom01').val(),
    $('#validationCustom02').val(),
    $('#validationCustom03').val(),
    $('#validationCustom04').val(),
    $('#validationCustom05').val(),
    ]

    var invalid = [
    $('#invalid1'),
    $('#invalid2'),
    $('#invalid3'),
    $('#invalid4'),
    $('#invalid5'),
    ]

    for(i=0; i<formControl.length; i++){

        if(formControl[i] === ""){
            invalid[i].addClass('d-block');
        }else if (formControl[i] !== ""){
            invalid[i].removeClass('d-block');
        }
    }
});

