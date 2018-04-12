window.onload = function() {
	var imgOp = 1;
	var img = document.getElementsByClassName('main-img');
	var a = document.getElementsByClassName('slider-btn')[0].getElementsByTagName('button');
	var timer1, timer2, timer3;
	var  slide1 = function () {
		img[0].style.opacity = '0.7';
		setTimeout(contin, 100);
			a[0].style.backgroundColor = '#7822b1';
			a[1].style.backgroundColor = 'white';
			a[2].style.backgroundColor = 'white';
		function contin(){
			clearTimeout(timer1,timer3);
			img[0].style.opacity = '1';
			img[0].style.cssText ="background: url(img/main-img.jpg);\
				background-repeat: no-repeat;\
				background-size: cover;\
				height: 510px;\
				padding-top: 10%;\
				width: 100%;\
				text-align: center;";
			timer2 = setTimeout(slide2,4000);
		}
	}
	var slide2 = function () {
		clearTimeout(timer1,timer2);
		img[0].style.opacity = '0.7';
		setTimeout(contin, 100);
		a[1].style.backgroundColor = '#7822b1';
		a[0].style.backgroundColor = 'white';
		a[2].style.backgroundColor = 'white';
		function contin(){
			img[0].style.opacity = '1';
			img[0].style.cssText ="background: url(img/img-bot-2.jpg);\
				background-repeat: no-repeat;\
				background-size: cover;\
				height: 510px;\
				padding-top: 10%;\
				width: 100%;\
				text-align: center;";
			timer3 = setTimeout(slide3,5000);
		}
	}
	var slide3 = function() {
		clearTimeout(timer2,timer3);
		img[0].style.opacity = '0.7';
		setTimeout(contin, 100);
		a[2].style.backgroundColor = '#7822b1';
		a[1].style.backgroundColor = 'white';
		a[0].style.backgroundColor = 'white';
		function contin(){
			img[0].style.opacity = '1';
			img[0].style.cssText ="background: url(img/img-bot-4.jpg);\
				background-repeat: no-repeat;\
				background-size: cover;\
				height: 510px;\
				padding-top: 10%;\
				width: 100%;\
				text-align: center;";
			timer1 = setTimeout(slide1,5000);
		}
	}

	var btnOnForm = document.getElementsByClassName('btn-on-form');
	for(var j=0; j<btnOnForm.length; j++) {
		btnOnForm[j].onclick = function() {
			document.getElementsByClassName('client-form')[0].style.display = 'block';
			setTimeout(contin, 200);
			function contin(){
				document.getElementsByClassName('client-form')[0].style.opacity = '1';
				document.getElementsByClassName('client-form-block')[0].style.transform = 'scale(1)';
			}
		}
	}
	document.getElementById('exit-form').onclick = function() {
		document.getElementsByClassName('client-form-block')[0].style.transform = 'scale(0)';
		document.getElementsByClassName('client-form')[0].style.opacity = '0';
		setTimeout(contin, 200);
		function contin(){
			document.getElementsByClassName('client-form')[0].style.display = 'none';
		}
	}

	setTimeout(slide2,5000);
}


