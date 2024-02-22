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
import { DatascienceAiComponent } from './datascience-ai/datascience-ai.component';
import { DotnetfullstackComponent } from './dotnetfullstack/dotnetfullstack.component';
import { PythonfullstackComponent } from './pythonfullstack/pythonfullstack.component';
import { JavafullstackComponent } from './javafullstack/javafullstack.component';
import { MeanstackComponent } from './meanstack/meanstack.component';
import { MernstackComponent } from './mernstack/mernstack.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { AzuredevopsComponent } from './azuredevops/azuredevops.component';
import { UifullstackComponent } from './uifullstack/uifullstack.component';
import { SalesforceComponent } from './salesforce/salesforce.component';
import { UxdesignerComponent } from './uxdesigner/uxdesigner.component';
import { TestingComponent } from './testing/testing.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { AdvanceexcelComponent } from './advanceexcel/advanceexcel.component';
import { EnglishcommunicationComponent } from './englishcommunication/englishcommunication.component';
import { MsofficeComponent } from './msoffice/msoffice.component';
import { TallyComponent } from './tally/tally.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import {TabViewModule} from 'primeng/tabview';

const routes: Routes = [
  {
    component: PagesComponent,
    path: ''
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: DatascienceAiComponent,
    path: 'datascience'
  },
  {
    component: DotnetfullstackComponent,
    path: 'dotnetfullstack'
  },
  {
    component: PythonfullstackComponent,
    path: 'pythonfullstack'
  },
  {
    component: JavafullstackComponent,
    path: 'javafullstack'
  },
  {
    component: MeanstackComponent,
    path: 'meanstack'
  },
  {
    component: MernstackComponent,
    path: 'mernstack'
  },
  {
    component: CybersecurityComponent,
    path: 'cybersecurity'
  },
  {
    component: AzuredevopsComponent,
    path: 'azuredevops'
  },
  {
    component: UifullstackComponent,
    path: 'uifullstack'
  },
  {
    component: SalesforceComponent,
    path: 'salesforce'
  },
  {
    component: UxdesignerComponent,
    path: 'uxdesign'
  },
  {
    component: DigitalmarketingComponent,
    path: 'digitalmarketing'
  },
  {
    component: TestingComponent,
    path: 'testing'
  },
  {
    component: WordpressComponent,
    path: 'wordpress'
  },
  {
    component: AdvanceexcelComponent,
    path: 'advanceexcel'
  },
  {
    component: EnglishcommunicationComponent,
    path: 'english'
  },
  {
    component: MsofficeComponent,
    path: 'msoffice'
  },
  {
    component: TallyComponent,
    path: 'tally'
  },
]


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CountUpDirective,
    ContactFormComponent,
    DatascienceAiComponent,
    DotnetfullstackComponent,
    PythonfullstackComponent,
    JavafullstackComponent,
    MeanstackComponent,
    MernstackComponent,
    CybersecurityComponent,
    AzuredevopsComponent,
    UifullstackComponent,
    SalesforceComponent,
    UxdesignerComponent,
    TestingComponent,
    WordpressComponent,
    AdvanceexcelComponent,
    EnglishcommunicationComponent,
    MsofficeComponent,
    TallyComponent,
    DigitalmarketingComponent
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
