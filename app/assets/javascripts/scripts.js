console.log('scripts.js loaded');


  // toggle the card flips for mobile - when you click a card, it'll flip
  $('.flip-container').click(function(){
      $(this).toggleClass('hover')
     });


   //responsive navbar
   $(function () {

       var menutoggle = $('#menuToggle');
       var menu = $('#menu nav');

       $(window).on('resize', function () {
           if ($(this).width() < 500 && menu.hasClass('keep-nav-closed')) {
               $('#menu nav').hide().removeAttr('class');
           }
           if (menutoggle.is(':hidden') && menu.is(':hidden') && $(window).width() > 500) {
               $('#menu nav').show().addClass('keep-nav-closed');
           }
       });

      //  $('#menu nav a, #menu h1 a').on('click', function (e) {
      //      e.preventDefault(); // stop all hash(#) anchor links from loading
      //  });


       $('#menuToggle').on('click', function (e) {
           e.preventDefault();
           $("#menu nav").slideToggle(300, 'swing');
       });

   });


   $(document).ready(function() {

   $("button.filter").click(function() {
     var id = this.id;
     $(".wrap").children().hide().filter('#'+id).fadeIn(450);
   });

    $(".showall").click(function() {
     $(".wrap").children().show();
      });


    });


    // $("#train").click(function() {
    // $("#").attr("checked", false); //uncheck all checkboxes
    // $(this).attr("checked", true);  //check the clicked one
    // });
