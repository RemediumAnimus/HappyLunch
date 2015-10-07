window.onload = function(){


    if ($('#page input').hasClass("phone-mask")) {
      $("#page .phone-mask").mask("+7 (999) 999-9999");
    };

    FastClick.attach(document.body);

    function stickyFooter() {
        $('.n-main').css('padding-bottom',$('.n-footer').outerHeight(true));
    }

    stickyFooter();

    $(window).on('resize',stickyFooter);

    $('input, textarea').placeholder();

    function placeholder() {

      $('input[type="text"],input[type="search"], textarea').focus(function(){
        if ($(this).prop('readonly')==false) {
           var plac = $(this).prop('placeholder');
           $(this).prop('placeholder',' ');

           $('input[type="text"],input[type="search"], textarea').blur(function(){
               $(this).prop('placeholder',plac);
           });
        }
      });

    };

    placeholder();

    $('.n-header__bottom__cities__select').selectmenu({
        appendTo: '.n-header__bottom__cities',
    });

    $('#slider-map').jcarousel({
          wrap: 'circular'
      });

    $('#page .arrow-r').click(function(){
      $('#slider-map').jcarousel('scroll','+=1');
    });

    $('#page .arrow-l').click(function(){
      $('#slider-map').jcarousel('scroll','-=1');
    });

    $('#slider-map').on('jcarousel:visiblein', 'li', function(event, carousel) {

    });

    if (('.n-main__slider').length) {

        var sliderH = new Swiper('.n-main__slider', {
            speed: 400,
            spaceBetween: 0,
            autoplay: 4000,
            effect: 'fade',
            nextButton: '.n-main__slider__arr-r',
            prevButton: '.n-main__slider__arr-l',
            fade: {
               crossFade: true
            },
            loop: true,
            autoplayDisableOnInteraction: false,
        });
    }

    $('.n-main__button-show').click(function(e){
        e.preventDefault();
        var button = $(this);
        $(this).parent().find('.n-main__resp__item__adm').toggle('fast',function(){
            button.html() == 'Смотреть ответ' ?
            button.html('Свернуть ответ') :
            button.html('Смотреть ответ');
        });
    });

    $('.n-main__wrap__items__item__wrap__counter__btn.plus').click(function(){
        var count =  parseInt($(this).parent().find('input').val());
        $(this).parent().find('input').val(++count);
    });

    $('.n-main__wrap__items__item__wrap__counter__btn.minus').click(function(){
        var count =  parseInt($(this).parent().find('input').val());
        if (count!=0) {
            $(this).parent().find('input').val(--count);
        }
    });

    $('.n-main__wrap__items__item__wrap__vals li label input').click(function(){
        $(this).closest('.n-main__wrap__items__item__wrap__vals').find('li label input').prop('checked',false);
        $(this).prop('checked',true);
    })

    $('.n-main__bucket__table__wrap__row--close').click(function(){
        $(this).parent().remove();
    })

    //!check-field//

    $(function() {
     $('.rf').each(function(){
     // Объявляем переменные (форма и кнопка отправки)
      var form = $(this),
      btn = form.find('.disabled');

     // Добавляем каждому проверяемому полю, указание что поле пустое
      form.find('.rfield').addClass('empty_field');

     // Функция проверки полей формы
      function checkInput(){
         form.find('.rfield').each(function(){
             if($(this).val() != ''){
         // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');
             } else {
         // Если поле пустое добавляем класс-указание
                $(this).addClass('empty_field');
             }
         });
       }

      // Функция подсветки незаполненных полей
      function lightEmpty(){
          var img = form.find('.empty_field').css('background-image');
        form.find('.empty_field').css({'border':'1px solid rgba(247,43,10,0.6)'});
        form.find('.empty_field').next().show();

      // Через полсекунды удаляем подсветку
        setTimeout(function(){
           form.find('.empty_field').removeAttr('style');
           $('.field-war').hide();
        },500);
       }

      // Проверка в режиме реального времени
        setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
           checkInput();
      // Считаем к-во незаполненных полей
           var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
           if(sizeEmpty > 0){
              if(btn.hasClass('disabled')){
                  return false
              } else {
                btn.addClass('disabled')
               }
            } else {
               btn.removeClass('disabled')
              }
         },500);

      // Событие клика по кнопке отправить
         btn.click(function(){
           if($(this).hasClass('disabled')){
      // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
              lightEmpty();
              return false
           } else {
     // Все хорошо, все заполнено, отправляем форму
              form.submit();
             }
         });
        });
      });

//!/check-field//

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(64.558992, 40.539854)
     };
     var map = new google.maps.Map(document.getElementsByClassName('map')[0],mapOptions);
     var image = 'img/ico/mark.png';
     var myLatLng = new google.maps.LatLng(64.558992, 40.537854);
     var pos = new google.maps.LatLng(64.4415053, 38.8597288);
     var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
     });

     var myOptions = {
        disableAutoPan: false
        ,maxWidth: 0
        ,pixelOffset: new google.maps.Size(-170, -80)
        ,zIndex: null
        ,boxStyle: {
          background: "#fdfcf8 no-repeat"
          ,boxShadow: '0'
          ,borderRadius:'0px'
          ,width: "252px"
         }
          ,closeBoxMargin: "10px 2px 2px 2px"
          ,closeBoxURL: ""
          ,infoBoxClearance: new google.maps.Size(1, 1)
          ,isHidden: false
          ,pane: "floatPane"
          ,enableEventPropagation: false
      };
}
initialize();

};
