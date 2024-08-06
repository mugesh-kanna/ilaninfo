import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { CountUpDirective } from './count-up.directive';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';
import {KeyFilterModule} from 'primeng/keyfilter';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';

const routes: Routes = [
  {
    component: PagesComponent,
    path: ''
  },
  {
    component: HomeComponent,
    path: 'home',
  }
]


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CountUpDirective,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CardModule,
    TooltipModule,
    CarouselModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    InputTextareaModule,
    DialogModule,
    KeyFilterModule,
    FileUploadModule,
    HttpClientModule,
    PdfViewerModule,
    MultiSelectModule,
    DropdownModule,
    TabViewModule
  ]
})
export class PagesModule { }
