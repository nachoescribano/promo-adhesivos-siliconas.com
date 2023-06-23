

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

$('.owl-carousel').owlCarousel({
    loop:true,
	center:true,
    margin:10,
    nav:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
// Get the modal
var modal = document.getElementById("myModal");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


function popUp(id){
	var anchuraPantalla=parseInt(window.innerWidth);
	var img= document.getElementById(id);

	if(anchuraPantalla>600){
	
	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
	var xClose=document.getElementsByClassName("close")[0];

	var anchoImagen=parseInt(modalImg.offsetWidth);
	var altoImagen=parseInt(modalImg.offsetHeight);
	var posicionIzquierda=parseInt(modalImg.getBoundingClientRect().left);
	var posicionSuperior=parseInt(modalImg.getBoundingClientRect().top-(altoImagen/2));



		
	xClose.style.top=posicionSuperior+"px";

	xClose.style.left=posicionIzquierda+anchoImagen-80+"px";
	}else{

	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
	var xClose=document.getElementsByClassName("close")[0];
	var altoImagen=parseInt(modalImg.offsetHeight);
	var posicionSuperior=parseInt(modalImg.getBoundingClientRect().top-(altoImagen/2));

	xClose.style.top=posicionSuperior+"px";

	xClose.style.right=35+"px";


	}

} 


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";

}

function cargarBotonScrollUp(){

	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('a.scroll-top').fadeIn('slow');
		} else {
			$('a.scroll-top').fadeOut('slow');
		}
	});
	$('a.scroll-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 600);
	});
}