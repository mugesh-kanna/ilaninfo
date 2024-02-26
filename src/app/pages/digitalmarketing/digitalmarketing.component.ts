import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.css']
})
export class DigitalmarketingComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
