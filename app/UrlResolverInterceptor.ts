import { UrlResolver } from '@angular/compiler';

export class UrlResolverInterceptor {

    static attach() {
        let proxied = UrlResolver.prototype.resolve;
        UrlResolver.prototype.resolve = (baseUrl: string, url: string): string => {
            let _url =  this.modifyUrl(url);
            return proxied.bind(proxied)(baseUrl, _url);
        };
    };

    private static modifyUrl(urlString: string) {
        console.log(urlString);
        return urlString;
    };
}