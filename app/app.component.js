"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.helloTargets = ['World', 'Angular', 'to you'];
        this.helloTo = this.helloTargets[0];
        setInterval(function () {
            var helloTargets = _this.helloTargets;
            // 把第一個移到最後一個
            helloTargets.push(helloTargets.shift());
            _this.helloTo = _this.helloTargets[0];
        }, 500);
    }
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: "app/app.html",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQU8xQyxJQUFhLFlBQVk7SUFJckI7UUFBQSxpQkFPQztRQVZPLGlCQUFZLEdBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLFlBQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRzNCLFdBQVcsQ0FBQztZQUNSLElBQUksWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUM7WUFDckMsYUFBYTtZQUNiLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFBQSxDQUFDO0lBQ04sbUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQzs7R0FDVyxZQUFZLENBWXhCO0FBWlksb0NBQVkifQ==