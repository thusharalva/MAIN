"use strict";
var router_1 = require('@angular/router');
var bulkUpload_component_1 = require('./bulkUpload/bulkUpload.component');
exports.routes = [
    //{ path: '', component: AppComponent }, //later need to be changed to home page
    { path: 'bulkUpload', component: bulkUpload_component_1.BulkUploadComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map