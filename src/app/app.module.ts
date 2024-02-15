import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AlertService } from './services/alert.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PagesService } from './services/pages.service';
import { NgHttpLoaderModule } from 'ng-http-loader';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot(),
    PdfViewerModule
  ],
  providers: [PagesService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
