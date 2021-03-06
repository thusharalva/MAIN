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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_file_upload_1 = require('../assets/components/ng2-file-upload/ng2-file-upload');
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var BulkUploadComponent = (function () {
    function BulkUploadComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
    }
    BulkUploadComponent.prototype.uploadDoc = function () {
        //this.uploader.url = URL+ "/bulkUpload";
        //this.uploader.setUrl( URL+ "/bulkUpload");
        this.uploader.uploadAll();
    };
    BulkUploadComponent = __decorate([
        core_1.Component({
            selector: 'afm-app',
            templateUrl: './app/bulkUpload/bulkUpload.component.html',
            directives: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES, common_1.NgClass, common_1.NgStyle, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], BulkUploadComponent);
    return BulkUploadComponent;
}());
exports.BulkUploadComponent = BulkUploadComponent;
//# sourceMappingURL=bulkUpload.component.js.map