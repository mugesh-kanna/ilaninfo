import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meanstack',
  templateUrl: './meanstack.component.html',
  styleUrls: ['./meanstack.component.css']
})
export class MeanstackComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
