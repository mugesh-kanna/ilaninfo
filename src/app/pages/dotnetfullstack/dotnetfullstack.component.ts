import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dotnetfullstack',
  templateUrl: './dotnetfullstack.component.html',
  styleUrls: ['./dotnetfullstack.component.css']
})
export class DotnetfullstackComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
