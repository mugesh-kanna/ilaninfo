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
                path: '/pages/datascience'
              },
              {
                label: '.NET Fullstack',
                path: '/pages/dotnetfullstack'
              },
              {
                label: 'PYTHON Fullstack',
                path: '/pages/pythonfullstack'
              },
              {
                label: 'JAVA Fullstack',
                path: '/pages/javafullstack'
              },
              {
                label: 'MEAN Stack',
                path: '/pages/meanstack'
              },
              {
                label: 'MERN Stack',
                path: '/pages/mernstack'
              },
              {
                label: 'Cyber Security',
                path: '/pages/cybersecurity'
              },
              {
                label: 'Ms-Azure+DEVOPS',
                path: '/pages/azuredevops'
              },
              {
                label: 'UI Fullstack',
                path: '/pages/uifullstack'
              },
              {
                label: 'SalesForce',
                path: '/pages/salesforce'
              },
            ]
          },
          {
            label: 'NON-TECHNICAL COURSES',
            subMenuItems : [
              {
                label: 'UX Designer',
                path: '/pages/uxdesign'
              },
              {
                label: 'DIGITAL Marketing',
                path: '/pages/digitalmarketing'
              },
              {
                label: 'TESTING',
                path: '/pages/testing'
              },
              {
                label: 'WordPress',
                path: '/pages/wordpress'
              },
              {
                label: 'Advance Excel',
                path: '/pages/advanceexcel'
              },
              {
                label: 'English IT Communication',
                path: '/pages/english'
              },
              {
                label: 'MS-Office',
                path: '/pages/msoffice'
              },
              {
                label: 'Tally',
                path: '/pages/tally'
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
