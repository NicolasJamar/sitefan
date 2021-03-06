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


// GOODIES : CALCUL SOUS-TOTAUX
    // input type='button'
$('#panier1').click(function(){
    var price1 = parseFloat($("#qt1").val() * parseFloat($('#price1').html())).toFixed(2);
    $('#tot1').html(price1 + " €");
});

$('#panier2').click(function(){
    var price2 = parseFloat($("#qt2").val() * parseFloat($('#price2').html())).toFixed(2);
    $('#tot2').html(price2 + " €");
});

$('#panier3').click(function(){
    var price3 = parseFloat($("#qt3").val() * parseFloat($('#price3').html())).toFixed(2);
    $('#tot3').html(price3 + " €");
});

$('#panier4').click(function(){
    var price4 = parseFloat($("#qt4").val() * parseFloat($('#price4').html())).toFixed(2);
    $('#tot4').html(price4 + " €");
});

$('#panier5').click(function(){
    var price5 = parseFloat($("#qt5").val() * parseFloat($('#price5').html())).toFixed(2);
    $('#tot5').html(price5 + " €");
});

$('#panier6').click(function(){
    var price6 = parseFloat($("#qt6").val() * parseFloat($('#price6').html())).toFixed(2);
    $('#tot6').html(price6 + " €");
});

$('#panier7').click(function(){
    var price7 = parseFloat($("#qt7").val() * parseFloat($('#price7').html())).toFixed(2);
    $('#tot7').html(price7 + " €");
});


    //Modal : Total des achats
$('#btnModalG').click(function(){
    $('#modalGoodies').addClass('d-block');
    // Find all images inside #goodies, make a copy and convert to an array;
    var goodiesImages = [
    "assets/img/aff_11844672520160417163655.jpg",
    "assets/img/aff_126320131220114843.jpg",
    "assets/img/aff_230920131220115322.jpg",
    "assets/img/aff_30904672520161205190723.jpg",
    "assets/img/aff_33254820141014170309.jpg",
    "assets/img/aff_41274672620161121180621.jpg",
    "assets/img/aff_815420131220115902.jpg",
    ];

    // Creation array for goodies titles;
    var goodiesTitles = [
    "L'étrange Noël de M. Jack",
    "Elf",
    "The Polar Express",
    "Le père Noël est une ordure",
    "Le père Noël",
    "Julius et le père Noël",
    "Santa Clause"
    ];
    // $('#goodies').find('h3').clone().toArray();

    // Creation array for Quantities;
    var goodiesQuantities = [
    parseFloat($('#qt1').val()),
    parseFloat($('#qt2').val()),
    parseFloat($('#qt3').val()),
    parseFloat($('#qt4').val()),
    parseFloat($('#qt5').val()),
    parseFloat($('#qt6').val()),
    parseFloat($('#qt7').val()),
    ];
    
    // Take all the SubTotals in an array;
    var goodiesSousTot = [
    parseFloat($('#tot1').html()).toFixed(2), //2 decimals
    parseFloat($('#tot2').html()).toFixed(2),
    parseFloat($('#tot3').html()).toFixed(2),
    parseFloat($('#tot4').html()).toFixed(2),
    parseFloat($('#tot5').html()).toFixed(2),
    parseFloat($('#tot6').html()).toFixed(2),
    parseFloat($('#tot7').html()).toFixed(2),
    ];

    var displayGoodies = "";

    //put all the subTotals in the modal "Total des achats";
    goodiesSousTot.forEach(function(prix, i){  
        if (goodiesSousTot[i] > 0){

            displayGoodies += "<div class='col-sm-3 colImage'>" 
            + "<img class='card-img-top' alt='Goodies' src='" 
            + goodiesImages[i] + "'> </div>"
            + "<div class='col-sm-3 colTitle'>"
            + "<h3>" + goodiesTitles[i]+ "</h3></div>"
            + "<div class='col-sm-3 colQuantity'>"
            + goodiesQuantities[i] + "</div>"
            + "<div class='col-sm-3 colPrice'>"
            + goodiesSousTot[i] + "</div>";
           
            // $('.colImage').prepend(goodiesImages[i]); 
            // $('.colTitle').prepend(goodiesTitles[i]);
            // $('.colQuantity').prepend(goodiesQuantities[i]);
            // $('.colPrice').prepend(goodiesSousTot[i]);
        };
        });  
    $('.modal-body').html(displayGoodies);

});

$('.close').click(function(){
    $('#modalGoodies').removeClass('d-block');
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