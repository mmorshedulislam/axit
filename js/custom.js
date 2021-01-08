(function($) {
  'use strict';

//For slide menu

  //For menu

$('.menu-icon').on('click', function() {
  $('.menu').animate({
    'left' : '0'
  });
});

  // For Close

$('.menu .close').on('click', function() {
  $('.menu').animate({
    'left' : '-200'
  });
});




//Menu toggle menu

/*

$('.menu-icon').on('click', function(){
  $('.menu').slideToggle();
})

*/


// Top scroll ready korar jonno
  $(window).scroll(function(){
    var scrl = $(window).scrollTop();

    if(scrl > 500){
      $('.top').css({
        'opacity' : '1'
      });
    }
    else{
      $('.top').css({
        'opacity' : '0'
      });
    }
  });


  $('.top').on('click', function(){
    $('html').animate({
      'scrollTop' : '0'
    }, 2500);
  })





}) (jQuery);




//For Tab

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
} 



