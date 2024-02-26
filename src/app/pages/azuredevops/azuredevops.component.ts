import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-azuredevops',
  templateUrl: './azuredevops.component.html',
  styleUrls: ['./azuredevops.component.css']
})
export class AzuredevopsComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
