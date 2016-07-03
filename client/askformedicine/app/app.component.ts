import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BulkUploadComponent } from './bulkUpload/bulkUpload.component';

@Component({
  selector: 'afm-app',
  templateUrl: './app/app.component.html',
  directives: [ ROUTER_DIRECTIVES ],
  precompile: [
    BulkUploadComponent
  ]
})

export class AppComponent {

  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
