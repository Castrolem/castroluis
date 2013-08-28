$(document).ready(function() {
    function filterPath(string) {
        return string
        .replace(/^\//,'')
            .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
            .replace(/\/$/,'');
    }
    var locationPath = filterPath(location.pathname);

    $('a[href*=#]').each(function() {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (locationPath === thisPath && (location.hostname === this.hostname || !this.hostname) && this.hash.replace(/#/,'') ) {
            var $target = $(this.hash), target = this.hash;
            if (target) {
                $(this).click(function (event) {
                    var width, correction, targetOffset;
                    targetOffset = $target.offset() && $target.offset().top;
                    width = $(document).width();
                    switch (true) {
                    case (width < 1024):
                        correction = 45.0;
                        break;
                    case (width < 768):
                        correction = 30.0;
                        break;
                    default:
                        correction = 60.0;
                        break;
                    }
                    event.preventDefault();
                    $("html, body").animate({scrollTop: targetOffset - correction}, 400, $.noop);
                });
            }
        }
    });
});
