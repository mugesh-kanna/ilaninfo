import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uifullstack',
  templateUrl: './uifullstack.component.html',
  styleUrls: ['./uifullstack.component.css']
})
export class UifullstackComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
