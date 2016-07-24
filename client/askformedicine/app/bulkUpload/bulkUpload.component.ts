import { Component } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from '../assets/components/ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'afm-app',
  templateUrl: './app/bulkUpload/bulkUpload.component.html',
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class BulkUploadComponent {

  public uploader: FileUploader = new FileUploader({url: URL});

  uploadDoc(){
    //this.uploader.url = URL+ "/bulkUpload";
    //this.uploader.setUrl( URL+ "/bulkUpload");
    this.uploader.uploadAll();
  }

}
