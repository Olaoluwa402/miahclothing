
 $(document).ready(function(){

   // toggler btn
 	$('.navbar-toggler').click(function(){
 		$('.navbar-toggler').toggleClass('change');
 	});

   // stick navbar less padding
   // smooth scroll
    $('.nav-item a , .header-link , #back-to-top').click(function(link){
      link.preventDefault();

      let target = $(this).attr('href');

      $('html, body').stop().animate({
        scrollTop: $(target).offset().top - 25
      }, 3000);
    });

 // Add smooth scrolling to all links
  // $("nav-itemn a, .header-link , #back-to-top").on('click', function(link) {

  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     link.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 3000, function(){
   
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });







   	$(window).scroll(function(){
   		let position = $(this).scrollTop();
   		if(position >= 718){
   			$('.navbar').addClass('navbar-background');
   			$('.navbar').addClass('fixed-top');
   		}else{
   			$('.navbar').removeClass('navbar-background');
   			$('.navbar').removeClass('fixed-top');
   		}
   	});

  

    // back-to-top
    $(window).scroll(function(){
      let position = $(this).scrollTop();
      if(position >= 718){
        $('#back-to-top').addClass('scrollTop');
      }else{
       $('#back-to-top').removeClass('scrollTop');
      }
    });

 	// ripple effect
  $(".banner-ripple").ripples({
   dropRadius: 25,
   perturbance: 0.6,
    });
 
    // magnific popup
    $('.parent-container').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	  	enabled:true
	  }
	  // other options
	});






  });