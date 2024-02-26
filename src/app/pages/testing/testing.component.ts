import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
