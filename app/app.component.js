(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>My {{which}} Angular 2 App</h1><input [(ngModel)]="which" placeholde="Number">',
            directives:[ ]
        })
        .Class({
            constructor:function() {
                this.which='first';
            }
        });
})(window.app || (window.app = {}));
