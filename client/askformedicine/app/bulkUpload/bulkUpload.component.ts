import { Component } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from '../assets/components/ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'afm-app',
  templateUrl: './app/bulkUpload/bulkUpload.component.html',
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class BulkUploadComponent {
}
