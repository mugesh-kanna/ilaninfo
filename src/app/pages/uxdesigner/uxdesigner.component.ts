import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uxdesigner',
  templateUrl: './uxdesigner.component.html',
  styleUrls: ['./uxdesigner.component.css']
})
export class UxdesignerComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
