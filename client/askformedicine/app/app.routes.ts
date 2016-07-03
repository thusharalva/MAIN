import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component'
import { BulkUploadComponent } from './bulkUpload/bulkUpload.component';

export const routes: RouterConfig = [
  //{ path: '', component: AppComponent }, //later need to be changed to home page
  { path: 'bulkUpload', component: BulkUploadComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
