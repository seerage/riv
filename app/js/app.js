document.addEventListener("DOMContentLoaded", function() {

	if($(window).width() > 575) {
		$('.mobile-menu-btn').click(function() {
			$('.mobile-menu').css('right', '0');
			$('.menu-wrapper').addClass('menu-wrapper_overlay')
		});
	
		$('.mobile-menu__cross').click(function() {
			$('.mobile-menu').css('right', '-220px');
			$('.menu-wrapper').removeClass('menu-wrapper_overlay')
		});
	} else {
		$('.mobile-menu-btn').click(function() {
			$('.mobile-menu').slideDown();
			$('.menu-wrapper').addClass('menu-wrapper_overlay')
		});

		$('.mobile-menu__cross').click(function() {
			$('.mobile-menu').slideUp();
			$('.menu-wrapper').removeClass('menu-wrapper_overlay')
		});
	}

	ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [52.614012, 39.607667],
						zoom: 17,
						controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '398005, Липецкая обл.,г. Липецк, ул. Ленина, д. 23, оф. 326',
            // balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/dest/round.png',
            // Размеры метки.
            iconImageSize: [67, 67],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/dest/round.png',
            // Размеры метки.
            iconImageSize: [67, 67],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
				.add(myPlacemark)
				
				function onResizeMap() {
					if ($(window).width() > '992') { 
							//Set New center
							myMap.setCenter([52.614012, 39.605775]);
							var pixelCenter2 = myMap.getGlobalPixelCenter('map_page');
							console.log(pixelCenter2);
							}	if ($(window).width() > '567') {
								myMap.setCenter([52.614012, 39.605967]);
							} else {
								myMap.setCenter([52.615012, 39.607867]);
							}
					} onResizeMap();
	
					window.onresize = function () {
							onResizeMap();
					};
});
	
});
