import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import {TooltipModule} from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [BaseComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule,
    MenubarModule,
    TooltipModule,
    ButtonModule,
  ],
  providers: []
})
export class LayoutModule { }
