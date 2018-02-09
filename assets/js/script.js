// ACCORDEON
var animTime = 300;  
var clickPolice = false; 

//GOODIES



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
var price = parseFloat($("#prc1").html());
// var quantityB = $('#qt').val();

var btn = [
    $("#btnPlus1"),
    $("#btnPlus2")
];

    // input type='button'
    //Bouton Plus
btn[0].click(function(){
var quantity = [
    $("#qt1").val(),
    $("#qt2").val()
];

    var price1 = parseFloat(quantity[0] * parseFloat($('#prc1').html())).toFixed(2);
    console.log(price1);
    $('#tot1').html(price1);
});

    //Bouton Moins
// $('#btnMoins1').click(function(){
//     quantity[i] -=1;
   
//     if (quantity[i] < 0){
//     alert("Vous ne pouvez pas commander moins que 0 !")    
//     quantity[i] ++;
//     };
    
//      $('#qt1').val(quantity[i]);
// });

// $('#calculate').click(function(){

//     var quantity = $("#qt1").val();
//     alert(quantity*price);

//   });


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


// ANCHOR LINK
  $('.lien').click(function(){
    var card = $(this).attr('href'); // Page cible
      $('html, body').animate( { scrollTop: $(card).offset().top }, 1000 ); // Go
      return false;
});

// POUSSIÈRE D'ÉTOILE
            // _uacct = "UA-994360-1";
            // urchinTracker();
    
            // var colour="#C79D27";
            // var sparkles=50;
            // var x=ox=400;
            // var y=oy=300;
            // var swide=800;
            // var shigh=600;
            // var sleft=sdown=0;
            // var tiny=new Array();
            // var star=new Array();
            // var starv=new Array();
            // var starx=new Array();
            // var stary=new Array();
            // var tinyx=new Array();
            // var tinyy=new Array();
            // var tinyv=new Array();
            // window.onload=function() { if (document.getElementById) {
            //       var i, rats, rlef, rdow;
            //       for (var i=0; i<sparkles; i++) {
            //             var rats=createDiv(3, 3);
            //             rats.style.visibility="hidden";
            //             document.body.appendChild(tiny[i]=rats);
            //             starv[i]=0;
            //             tinyv[i]=0;
            //             var rats=createDiv(5, 5);
            //             rats.style.backgroundColor="transparent";
            //             rats.style.visibility="hidden";
            //             var rlef=createDiv(1, 5);
            //             var rdow=createDiv(5, 1);
            //             rats.appendChild(rlef);
            //             rats.appendChild(rdow);
            //             rlef.style.top="2px";
            //             rlef.style.left="0px";
            //             rdow.style.top="0px";
            //             rdow.style.left="2px";
            //             document.body.appendChild(star[i]=rats);
            //       }
            //       set_width();
            //       sparkle();
            // }}
            // function sparkle() {
            //       var c;
            //       if (x!=ox || y!=oy) {
            //             ox=x;
            //             oy=y;
            //             for (c=0; c<sparkles; c++){ if (!starv[c]) {
            //                   star[c].style.left=(starx[c]=x)+"px";
            //                   star[c].style.top=(stary[c]=y)+"px";
            //                   star[c].style.clip="rect(0px, 5px, 5px, 0px)";
            //                   star[c].style.visibility="visible";
            //                   starv[c]=50;
            //                   break;}
            //             }
            //       }
            //       for (c=0; c<sparkles; c++) {
            //             if (starv[c]) update_star(c);
            //             if (tinyv[c]) update_tiny(c);
            //       }
            //       setTimeout("sparkle()", 40);
            // }
            // function update_star(i) {
            //       if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
            //       if (starv[i]) {
            //             stary[i]+=1+Math.random()*3;
            //             if (stary[i]<shigh+sdown) {
            //                   star[i].style.top=stary[i]+"px";
            //                   starx[i]+=(i%5-2)/5;
            //                   star[i].style.left=starx[i]+"px";
            //             }
            //             else {
            //                   star[i].style.visibility="hidden";
            //                   starv[i]=0;
            //                   return;
            //             }
            //       }
            //       else {
            //             tinyv[i]=50;
            //             tiny[i].style.top=(tinyy[i]=stary[i])+"px";
            //             tiny[i].style.left=(tinyx[i]=starx[i])+"px";
            //             tiny[i].style.width="2px";
            //             tiny[i].style.height="2px";
            //             star[i].style.visibility="hidden";
            //             tiny[i].style.visibility="visible";
            //       }
            // }
            // function update_tiny(i) {
            //       if (--tinyv[i]==25) {
            //             tiny[i].style.width="1px";
            //             tiny[i].style.height="1px";
            //       }
            //       if (tinyv[i]) {
            //             tinyy[i]+=1+Math.random()*3;
            //             if (tinyy[i]<shigh+sdown) {
            //                   tiny[i].style.top=tinyy[i]+"px";
            //                   tinyx[i]+=(i%5-2)/5;
            //                   tiny[i].style.left=tinyx[i]+"px";
            //             }
            //             else {
            //                   tiny[i].style.visibility="hidden";
            //                   tinyv[i]=0;
            //                   return;
            //             }
            //       }
            //       else tiny[i].style.visibility="hidden";
            // }
            // document.onmousemove=mouse;
            // function mouse(e) {
            //       set_scroll();
            //       y=(e)?e.pageY:event.y+sdown;
            //       x=(e)?e.pageX:event.x+sleft;
            // }
            // function set_scroll() {
            //       if (typeof(self.pageYOffset)=="number") {
            //             sdown=self.pageYOffset;
            //             sleft=self.pageXOffset;
            //       }
            //       else if (document.body.scrollTop || document.body.scrollLeft) {
            //             sdown=document.body.scrollTop;
            //             sleft=document.body.scrollLeft;
            //       }
            //       else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
            //             sleft=document.documentElement.scrollLeft;
            //             sdown=document.documentElement.scrollTop;
            //       }
            //       else {
            //             sdown=0;
            //             sleft=0;
            //       }
            // }
            // window.onresize=set_width;
            // function set_width() {
            //       if (typeof(self.innerWidth)=="number") {
            //             swide=self.innerWidth;
            //             shigh=self.innerHeight;
            //       }
            //       else if (document.documentElement && document.documentElement.clientWidth) {
            //             swide=document.documentElement.clientWidth;
            //             shigh=document.documentElement.clientHeight;
            //       }
            //       else if (document.body.clientWidth) {
            //             swide=document.body.clientWidth;
            //             shigh=document.body.clientHeight;
            //       }
            // }
            // function createDiv(height, width) {
            //       var div=document.createElement("div");
            //       div.style.position="absolute";
            //       div.style.height=height+"px";
            //       div.style.width=width+"px";
            //       div.style.overflow="hidden";
            //       div.style.backgroundColor=colour;
            //       return (div);
            // }