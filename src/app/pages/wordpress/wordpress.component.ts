import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.css']
})
export class WordpressComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
