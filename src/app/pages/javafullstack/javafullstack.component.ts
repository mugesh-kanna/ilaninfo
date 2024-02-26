import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javafullstack',
  templateUrl: './javafullstack.component.html',
  styleUrls: ['./javafullstack.component.css']
})
export class JavafullstackComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
