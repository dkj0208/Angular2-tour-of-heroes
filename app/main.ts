import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

import { appRouterProviders } from './routes/app.routes';

bootstrap(AppComponent, [appRouterProviders]);
