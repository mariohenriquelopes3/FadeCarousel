	
	var idxSlide = 1;
	var slideManual = false;

	function initSlide() {
		setInterval(function() {
			if (!slideManual) {
				animeSlide();
			} else {
				slideManual = false;
			}
		}, 3500);
		defineSize();
	}
	function defineSize() {
		var i;
		var maior = 0;

		var array = document.querySelectorAll(".divSlideFade .divInSlide");
		for (i = 0; i < array.length; i++) {
			maior = ((array[i].offsetHeight > maior) ? array[i].offsetHeight : maior);
		}

		var el = document.querySelector(".divSlideFade");
		if (el != null) {
			el.style.height = maior + 'px';
		}
	}
	function animeSlide() {
		if (idxSlide > (document.querySelectorAll('.divSlideFade .divInSlide').length - 1)) {
			idxSlide = 0;
		}

		try {
			document.querySelector('.divInSlide.ativado').className = 'divInSlide';
			document.querySelectorAll('.divSlideFade .divInSlide')[idxSlide].className = 'divInSlide ativado';
			document.querySelector('.divIndicador div.ativado').className = '';
			document.querySelectorAll('.divIndicador div')[idxSlide].className = 'ativado';
		} catch(e) {}
		
		idxSlide++;
	}
	function irParaSlide(id) {
		idxSlide = id;
		slideManual = true;
		animeSlide();
	}

	window.addEventListener("load", initSlide);
	window.addEventListener("resize", defineSize);