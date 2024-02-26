import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datascience-ai',
  templateUrl: './datascience-ai.component.html',
  styleUrls: ['./datascience-ai.component.css']
})
export class DatascienceAiComponent {
  contactModal: boolean = false;
  constructor(private router: Router){}
  navigate(url){
    this.router.navigateByUrl(url);
  }
}
