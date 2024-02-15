import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import * as AWS from 'aws-sdk';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShow: boolean = false;
  alliances: any[] = [];
  showCounter: boolean = false;
  clients: any[] = [];
  responsiveOptions: any[] = []
  contactForm: FormGroup;
  submitted: boolean = false;
  activeIndex: number = 0;
  pathName: string;
  contactModal: boolean = false;

  constructor(private el: ElementRef, private fb: FormBuilder, private toastr: ToastrService,
    private router: Router, private alertService: AlertService) {
    this.pathName = window.location.pathname;
  }

  ngOnInit(): void {
    this.alliances = [
      { url: '../../../assets/images/lenovo.png', name: "Lenovo" },
      { url: '../../../assets/images/acer.png', name: "acer" },
      { url: '../../../assets/images/array.png', name: "Array" },
      { url: '../../../assets/images/aws.png', name: "AWS" },
      { url: '../../../assets/images/vm.png', name: "VMware" },
      { url: '../../../assets/images/ibm.png', name: "IBM" },
      { url: '../../../assets/images/hp.png', name: "HP" },
      { url: '../../../assets/images/soph.png', name: "SOPHOS" },
      { url: '../../../assets/images/ms.png', name: "Microsoft" },
      { url: '../../../assets/images/nivi.png', name: "NIVIDIA" },
      { url: '../../../assets/images/bar.png', name: "Barracuda" },
      { url: '../../../assets/images/cis.png', name: "CISCO" }
    ];
    this.clients = [
      { url: '../../../assets/images/client-1.png' },
      { url: '../../../assets/images/client-2.png' },
      { url: '../../../assets/images/client-3.png' },
      { url: '../../../assets/images/client-4.png' },
      { url: '../../../assets/images/client-5.png' },
      { url: '../../../assets/images/client-6.png' },
      { url: '../../../assets/images/client-7.png' },
      { url: '../../../assets/images/client-8.png' },
      { url: '../../../assets/images/client-9.png' },
      { url: '../../../assets/images/client-10.png' },
      { url: '../../../assets/images/client-11.png' },
      { url: '../../../assets/images/client-12.png' },
      { url: '../../../assets/images/client-13.png' },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 6,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 2
      }
    ];
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$')]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9,9}$')])
    })
  }

  slideChanged(event) {
    this.activeIndex = event.to;
    AOS.refresh();
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   const el = this.el.nativeElement;
  //   const targetElement = document.getElementById('facts');

  //   if (this.isElementInViewport(targetElement)) {
  //     // el.classList.add('active');
  //     // Log to console when entering the section
  //     this.showCounter = true;
  //     // Initialize counter when the element comes into view
  //     el.dispatchEvent(new Event('countUp'));
  //   } else {
  //     // this.showCounter = false;
  //     // el.classList.remove('active');
  //   }
  // }

  // private isElementInViewport(el: any): boolean {
  //   const rect = el.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  submitContactForm() {
    this.submitted = true;
    if (this.contactForm.valid) {
      // Set the region and credentials (replace with your actual credentials)
      AWS.config.update({
        accessKeyId: 'AKIA5K53FKAPBNS73IE5',
        secretAccessKey: 's3QVl2qk3VE0aWmibGpMPRVN/oBk6QWvnzHrPbRp',
        region: 'ap-south-1'
      });

      // Create sendEmail params 
      const params = {
        Destination: {
          ToAddresses: [
            's.lathika1312@gmail.com',
            /* more items */
          ]
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<p><b>Name:</b> ${this.contactForm.value.name},</p>
              <p><b>Mobile Number:</b> ${this.contactForm.value.mobile},</p>
              <p><b>Email Address:</b> ${this.contactForm.value.email},</p>
              <p><b>Message:</b> ${this.contactForm.value.message},</p>`
            },
            // Text: {
            //   Charset: 'UTF-8',
            //   Data: 'This is the body of your email.'
            // }
          },
          Subject: {
            Charset: 'UTF-8',
            Data: this.contactForm.value.subject
          }
        },
        Source: 'gmkanna532000@gmail.com', // Sender email address
        // ReplyToAddresses: [optional, add if needed]
      };

      // Create the promise and SES service object
      // const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

      // Handle promise's fulfilled/rejected states
      // sendPromise.then(
      //   function (data) {
      //     console.log('Email sent successfully. MessageId:', data.MessageId);
      //     window.alert('Submitted Successfully');
      //   }).catch(
      //     function (err) {
      //       console.error('Error sending email:', err, err.stack);
      //       window.alert('Unable to Submit')
      //     });
    this.contactForm.reset();
    }
    else {
      window.alert('Please fill the form correctly')
    }
  }

  routeNavigate(path) {
    this.router.navigate([path]);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  showContactForm(){
    this.contactModal = true;
  }

}
