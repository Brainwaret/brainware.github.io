window.onload = function() {
	var a = document.getElementsByClassName('slider-btn')[0].getElementsByTagName('button');
	a[0].onclick = function () {
		this.style.backgroundColor = '#7822b1';
		a[1].style.backgroundColor = 'white';
		a[2].style.backgroundColor = 'white';
	}
	a[1].onclick = function () {
		this.style.backgroundColor = '#7822b1';
		a[0].style.backgroundColor = 'white';
		a[2].style.backgroundColor = 'white';
	}
	a[2].onclick = function () {
		this.style.backgroundColor = '#7822b1';
		a[1].style.backgroundColor = 'white';
		a[0].style.backgroundColor = 'white';
	}
}