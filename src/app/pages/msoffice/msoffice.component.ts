import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msoffice',
  templateUrl: './msoffice.component.html',
  styleUrls: ['./msoffice.component.css']
})
export class MsofficeComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
