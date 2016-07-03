import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap( AppComponent, [ Title, APP_ROUTER_PROVIDERS ] );
