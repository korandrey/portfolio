var sliderModule = (function() {

    var counter = 1,
        duration = 300,
        inProcess = false;

    var moveSlide = function (container, direction) {
        var items = $('.slider-item', container),
            activeItem = items.filter('.active'),
            direction = direction == 'down' ? 100 : -100;

        //console.log(counter);
        if(counter >= items.length || counter <= -items.length) counter = 0;

        var reqItem = items.eq(counter);

        activeItem.animate({
            'top' : direction + '%'
        }, duration);

        reqItem.animate({
            'top' : 0
        }, duration, function () {
            activeItem.removeClass('active').css('top', '-' + direction + '%');
            $(this).addClass('active');

            inProcess = false;
        });
    }


    return {
        upInit: function () {
            $('.work-item__next').on('click', function (e) {
                e.preventDefault();
                if(!inProcess) {
                    inProcess = true;
                    moveSlide($('.works__desc-block'), 'up');
                    moveSlide($('.work-item__current'), 'up');
                    moveSlide($('.work-item__prev'), 'down');
                    moveSlide($('.work-item__next'), 'up');
                }
                counter++;
                //console.log(counter);
            })
        },

        downInit: function () {
            $('.work-item__prev').on('click', function (e) {
                e.preventDefault();
                if(!inProcess) {
                    inProcess = true;
                    moveSlide($('.works__desc-block'), 'down');
                    moveSlide($('.work-item__current'), 'down');
                    moveSlide($('.work-item__prev'), 'up');
                    moveSlide($('.work-item__next'), 'down');
                }
                counter--;
                //console.log(counter);
            });
        }
    };







    //init : function () {
    //    $('.work-item__preview').on('click', function (e) {
    //        e.preventDefault();

    //       if(!inProcess) {
    //           inProcess = true;
    //           moveSlide($('.works__desc-block'), 'up');
    //           moveSlide($('.work-item__current'), 'up');
    //           moveSlide($('.work-item__prev'), 'down');
    //          moveSlide($('.work-item__next'), 'up');
    //      }


    //      counter++;
    //  });
    //}

})();

if($('.works')) {
    sliderModule.upInit();
    sliderModule.downInit();
};

