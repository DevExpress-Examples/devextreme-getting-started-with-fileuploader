import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClickEvent } from 'devextreme/ui/button';

import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';

@Component({
    selector: 'app-root',
    imports: [DxFileUploaderModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  counter = 0;

  buttonText = 'Click count: 0';

  onClick(_e: ClickEvent): void {
    this.counter++;
    this.buttonText = `Click count: ${this.counter}`;
  }
}
