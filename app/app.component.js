(function(app) {
    //make some aliases
    var ngComp=ng.core.Component;
    var ngHttp=ng.http.HTTP_PROVIDERS;
    var ngRouterDir=ng.router.ROUTER_DIRECTIVES;
    var ngRouter=ng.router.Router;
    app.loginComponent=ngComp({
        selector:"app-login",
        template:'<div class="well"><p class="lead"></p><input class="input input-lg col-sm-12" [(ngModel)]="username" placeholder="Username" (blur)="login()"><br><br></div>'
    }).Class({
        constructor:function loginComponent(){
            this.username='';
        },

        login:function(){
            console.log(this.username);
            if(this.username=="test"){
                
            }
        }
    });


    app.AppComponent=ngComp({
        selector: 'my-app',
        template: '<h1>Angular 2(ES5) - Case Study</h1><app-login></app-login><a [routerLink]="[\'Lists\']">Lists</a>',
        directives:[app.loginComponent,ngRouterDir],
        providers:[ngHttp,ngRouter]
    }).Class({
        constructor:[ngHttp,ngRouter,function AppComponent(_http,_router) {
            this.http=_http;
            this.router=_router;
        }],
    });

    app.AppComponent = ng.router
        .RouteConfig([
            { path: '/', component:app.ListsComponent, name:'Lists' },
            { path: '/children', component:app.ChildrenComponent, name:'Children' }
        ])(app.AppComponent);
})(window.app || (window.app = {}));
