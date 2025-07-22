import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
