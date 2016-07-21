(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>My {{which}} Angular 2 App</h1><input [(ngModel)]="which" placeholde="Number"> <a [routerLink]=["Lists"]>Lists</a>',
            directives:[
                app.ListsComponent,
                ng.router.ROUTER_DIRECTIVES
            ]
        })
        .Class({
            constructor: [ng.router.Route, function(_router) {
                this._router = _router;
                this.which='first';
            }]
        });

    app.AppComponent= ng.router.RouteConfig([
        { path: '/', component:app.ListsComponent, name:'Lists' }
    ])(app.AppComponent);

})(window.app || (window.app = {}));
