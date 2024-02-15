import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pageRevealAnimation } from 'src/app/pages/page-reveal.animation';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  animations: [pageRevealAnimation],
})
export class BaseComponent implements OnInit {
  isShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  menuHide() {
    $(".submenu").css("display", "none")
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when the user scrolls down 200 pixels
    this.isShow = window.scrollY > 200;
  }

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
