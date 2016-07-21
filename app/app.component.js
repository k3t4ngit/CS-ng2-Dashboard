(function(app) {
    //make some aliases
    var ngComp=ng.core.Component;

    app.loginComponent=ngComp({
        selector:"app-login",
        template:'<div class="well"><p class="lead">Login Here</p><form class="form form-horizontal"><input class="input input-lg" [(ngModel)]="username" placeholder="Username"><br><br><input class="input input-lg" [(ngModel)]="password" placeholder="Password"></form></div>'
    }).Class({
        constructor:function loginComponent(){
            this.username='';
            this.password='';
        }
    });


    app.AppComponent=ngComp({
        selector: 'my-app',
        template: '<h1>Angular 2(ES5) - Case Study</h1><app-login></app-login>',
        directives:[app.loginComponent],
        providers:[]
    }).Class({
        constructor:function() {

        }
    });
})(window.app || (window.app = {}));
