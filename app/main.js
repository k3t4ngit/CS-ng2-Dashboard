(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent, [
            ng.router.ROUTER_BINDINGS,
            ng.core.bind(ng.router.LocationStrategy).toClass(ng.router.HashLocationStrategy)       
        ]);
    });
})(window.app || (window.app = {}));
