var navigation = (function () {

    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {
        $('.navigation__hero').on('click', _openMenu);
    };

    var _openMenu = function (e) {

        if ($(this).hasClass('navigation__active')) {
            $(this).removeClass('navigation__active');
        } else {
            $(this).addClass('navigation__active');
        }
    };

    return {
        init: init
    };

})();

if (document.querySelector('.navigation__hero')) {
    navigation.init();
}

