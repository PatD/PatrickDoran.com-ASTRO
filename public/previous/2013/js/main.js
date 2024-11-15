// hover on About 

$('#goAbout').hover(
  function () {
    $("#patrickdoranimage").fadeIn(500);
  },
  function () {
    $("#patrickdoranimage").fadeOut(100);
  }
);




if (screen.width >= 400) {
	
	
// Load fast load fast load fast load fast
$("article img").lazyload();

}













// Expand details screen




$(".goOnUp").click(function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $('html').offset().top }, 'fast');
    
});



$("#goAboutfixed").click(function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $('#about-content').offset().top }, 'fast');
    
});





