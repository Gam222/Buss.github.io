var imagecount = 1;
var total = 5;

function slide(x) {
	var Image = document.getElementById('myPhoto');
	imagecount = imagecount + x;
	if (imagecount > total) { imagecount = 1; }
	if (imagecount < 1) { imagecount = total; }
	Image.src = 'gbr/img'+ imagecount +'.jpg';
}

window.setInterval(function slideA() {
	var Image = document.getElementById('myPhoto');
	imagecount = imagecount + 1;
	if (imagecount > total) { imagecount = 1; }
	if (imagecount < 1) { imagecount = total; }
	Image.src = 'gbr/img'+ imagecount +'.jpg';
}, 5000);