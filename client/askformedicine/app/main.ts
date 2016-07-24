import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { APP_ROUTER_PROVIDERS } from './app.routes';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';


bootstrap( AppComponent, [ Title, APP_ROUTER_PROVIDERS, HTTP_PROVIDERS ] );
