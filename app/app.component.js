(function(app) {
    //make some aliases
    var ngComp=ng.core.Component;

    app.loginComponent=ngComp({
        selector:"app-login",
        template:'<div class="well"><p class="lead"></p><input class="input input-lg" [(ngModel)]="username" placeholder="Username"><br><br></div>'
    }).Class({
        constructor:function loginComponent(){
            this.username='';
        }

        login(){
            
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
