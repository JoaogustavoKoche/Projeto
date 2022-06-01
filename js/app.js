'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('basic', 'basic.html', true),            
            new Route('social', 'social.html'),
            new Route('certificates', 'certificates.html')
        ]);
    }
    init();
}());
