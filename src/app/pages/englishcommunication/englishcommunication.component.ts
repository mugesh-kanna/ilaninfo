import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-englishcommunication',
  templateUrl: './englishcommunication.component.html',
  styleUrls: ['./englishcommunication.component.css']
})
export class EnglishcommunicationComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
