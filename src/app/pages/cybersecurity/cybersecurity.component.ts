import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cybersecurity',
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
