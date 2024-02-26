import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesforce',
  templateUrl: './salesforce.component.html',
  styleUrls: ['./salesforce.component.css']
})
export class SalesforceComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
