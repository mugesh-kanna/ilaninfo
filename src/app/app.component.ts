import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CHN';
  ngOnInit(){
    AOS.init({ duration: 1000 });//AOS - 2
    AOS.refresh();
  }
}
