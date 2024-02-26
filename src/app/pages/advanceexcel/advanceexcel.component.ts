import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanceexcel',
  templateUrl: './advanceexcel.component.html',
  styleUrls: ['./advanceexcel.component.css']
})
export class AdvanceexcelComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
