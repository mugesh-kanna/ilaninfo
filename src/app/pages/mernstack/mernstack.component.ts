import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mernstack',
  templateUrl: './mernstack.component.html',
  styleUrls: ['./mernstack.component.css']
})
export class MernstackComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
