// javascript code goes here

	function loaded() {
		
		setTimeout(function() {
			$('.preloading').fadeOut("slow");
		}, 1000);
	}

	$(function() {

		$('#whats-new-list-carousel').carouFredSel({
			scroll : {
				fx				:"scroll",
       			easing          : "swing"
			}
		});

		$('#carousel span').append('<img src="images/carousel_glare.png" class="glare" />');
		$('#thumbs a').append('<img src="images/carousel_glare_small.png" class="glare" />');

		$('#carousel').carouFredSel({
			responsive: true,
			circular: false,
			auto: false,
			items: {
				visible: 1,
				width: 200,
				height: '56%'
			},
			scroll: {
				fx: 'directscroll'
			}
		});

		$('#thumbs').carouFredSel({
			responsive: true,
			circular: false,
			infinite: false,
			auto: false,
			prev: '#prev',
			next: '#next',
			items: {
				visible: {
					min: 2,
					max: 6
				},
				width: 150,
				height: '66%'
			}
		});

		$('#thumbs a').click(function() {
			$('#carousel').trigger('slideTo', '#' + this.href.split('#').pop() );
			$('#thumbs a').removeClass('selected');
			$(this).addClass('selected');
			return false;
		});

		
	});

	//$(".preloading").hide();