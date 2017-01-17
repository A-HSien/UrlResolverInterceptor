"use strict";
var compiler_1 = require("@angular/compiler");
var UrlResolverInterceptor = (function () {
    function UrlResolverInterceptor() {
    }
    UrlResolverInterceptor.attach = function () {
        var _this = this;
        var proxied = compiler_1.UrlResolver.prototype.resolve;
        compiler_1.UrlResolver.prototype.resolve = function (baseUrl, url) {
            var _url = _this.modifyUrl(url);
            return proxied.bind(proxied)(baseUrl, _url);
        };
    };
    ;
    UrlResolverInterceptor.modifyUrl = function (urlString) {
        console.log(urlString);
        return urlString;
    };
    ;
    return UrlResolverInterceptor;
}());
exports.UrlResolverInterceptor = UrlResolverInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXJsUmVzb2x2ZXJJbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVybFJlc29sdmVySW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUFnRDtBQUVoRDtJQUFBO0lBY0EsQ0FBQztJQVpVLDZCQUFNLEdBQWI7UUFBQSxpQkFNQztRQUxHLElBQUksT0FBTyxHQUFHLHNCQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUM1QyxzQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBQyxPQUFlLEVBQUUsR0FBVztZQUN6RCxJQUFJLElBQUksR0FBSSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUM7SUFDTixDQUFDO0lBQUEsQ0FBQztJQUVhLGdDQUFTLEdBQXhCLFVBQXlCLFNBQWlCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQUEsQ0FBQztJQUNOLDZCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSx3REFBc0IifQ==