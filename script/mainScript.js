$( document ).ready(function() {
  
    console.log( "ready!" );

  	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
      t.style.left = n.clientX + "px", 
      t.style.top = n.clientY + "px", 
      e.style.left = n.clientX + "px", 
      e.style.top = n.clientY + "px", 
      i.style.left = n.clientX + "px", 
      i.style.top = n.clientY + "px"
      });
      var t = document.getElementById("cursor"),
          e = document.getElementById("cursor2"),
          i = document.getElementById("cursor3");
      function n(t) {
          e.classList.add("hover"), i.classList.add("hover")
      }
      function s(t) {
          e.classList.remove("hover"), i.classList.remove("hover")
      }
      s();
      for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
          o(r[a])
      }
      function o(t) {
          t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
      }

//Navigation

var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');
    applyListeners();
  };
  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      return toggleClass(body, 'nav-active');
    });
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
  };
  init();
}();

//PageScroll

(function ( $ ) {
	'use strict';
   $.fn.heightFull = function() {
	var totalHeight = $('window').height();
	var heightMinus = totalHeight;
	$(this).css('height', heightMinus);
  };
}( jQuery ));


$("main").onepage_scroll({
   sectionContainer: "section", // sectionContainer accepts any kind of selector.
   easing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)".
   animationTime: 1000, // AnimationTime let you define how long each section takes to animate.
   pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
   loop: true, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   responsiveFallback: 0 // You can fallback to normal page scroll by defining the width of the browser in which you want the responsive fallback to be triggered. For example, set this to 600 and whenever the browser's width is less than 600, the fallback will kick in.
});

  //scroll down on click//
  $(".mouseScroll").click(function() {
    $('html, body').animate({
      scrollTop: $("#sec-b").offset().top - 0
    }, 800);
  });

$("main .item").heightFull();
$(window).resize(function() {
  $("main .item").heightFull();
});


// Sec-a text animation
(function() {

  var quotes = $(".quotes");
  var quoteIndex = -1;
  
  function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
          .fadeIn(3000)
          .delay(5000)
          .fadeOut(2000, showNextQuote);
  }
  
  showNextQuote();
  
})();

});