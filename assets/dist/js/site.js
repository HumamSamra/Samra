(function ($){
    "use strict";
    
    $(window).on('load', function () {
        $('.loaderUp').addClass('done');
        $('.loaderDown').addClass('done');
        $('main').addClass("blurIn");
    });

})(jQuery);

$('a[name="changeLang"]').click(function (){
    localStorage.setItem("language", this.id.toString());
    window.location.reload();
});