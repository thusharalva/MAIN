import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component'
import { BulkUploadComponent } from './bulkUpload/bulkUpload.component';
import { ProductFormComponent } from './product/product.form.component'

export const routes: RouterConfig = [
  //{ path: '', component: AppComponent }, //later need to be changed to home page
  { path: 'bulkUpload', component: BulkUploadComponent },
  { path: 'productForm', component: ProductFormComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
