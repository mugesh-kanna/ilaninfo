import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: any[]=[];

  @HostListener('window:scroll', ['$event']) getScrollHeight() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      let header: HTMLElement = document.querySelector(
        '.navbar'
      ) as HTMLElement;
      if (window.pageYOffset >= 60) {
        header.parentElement!.classList.add('fixed-on-scroll');
      } else {
        header.parentElement!.classList.remove('fixed-on-scroll');
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        label: 'HOME',
        icon: 'fa fa-home',
        path: '/pages/home'
      },
      {
        label: 'COURSES',
        icon: 'fa fa-book',
        path: '',
        subMenu: [
          {
            label: 'TECHNICAL COURSES',
            subMenuItems : [
              {
                label: 'DataScience+AI',
                path: ''
              },
              {
                label: '.NET Fullstack',
                path: ''
              },
              {
                label: 'PYTHON Fullstack',
                path: ''
              },
              {
                label: 'JAVA Fullstack',
                path: ''
              },
              {
                label: 'MEAN Stack',
                path: ''
              },
              {
                label: 'MERN Stack',
                path: ''
              },
              {
                label: 'Cyber Security',
                path: ''
              },
              {
                label: 'Ms-Azure+DEVOPS',
                path: ''
              },
              {
                label: 'UI Fullstack',
                path: ''
              },
              {
                label: 'SalesForce',
                path: ''
              },
            ]
          },
          {
            label: 'NON-TECHNICAL COURSES',
            subMenuItems : [
              {
                label: 'UX Designer',
                path: ''
              },
              {
                label: 'DIGITAL Marketing',
                path: ''
              },
              {
                label: 'TESTING',
                path: ''
              },
              {
                label: 'WordPress',
                path: ''
              },
              {
                label: 'Advance Excel',
                path: ''
              },
              {
                label: 'English IT Communication',
                path: ''
              },
              {
                label: 'MS-Office',
                path: ''
              },
              {
                label: 'Tally',
                path: ''
              },
            ]
          }
        ]
      }
    ];
  }

  hasItems(item) {
    return item.subMenu !== undefined ? item.subMenu.length > 0 : false;
  }

  removeFocus() {
    $(".submenu").css("display", "none");
    // $(document).ready(function() {
    //   $('.navbar-nav a').on('click', function() {
    //     if ($(window).width() < 992) {
    //       $('.navbar-toggler').click();
    //     }
    //   });
    // });
  }


  addFocus(evt) {
    $(".submenu").css("display", "none")
    var string = '.click-style' + evt
    $(string).css({
      "display": "flex",
      "justify-content": "center"
    })
  }

}
