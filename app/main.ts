import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { UrlResolverInterceptor } from './UrlResolverInterceptor';


UrlResolverInterceptor.attach();
platformBrowserDynamic().bootstrapModule(AppModule);