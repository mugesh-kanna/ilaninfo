import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesService } from 'src/app/services/pages.service';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup
  submitted: boolean = false;
  service: any;
  dropValues: any[] = [];
  type: any;


  constructor(private fb: FormBuilder, private pagesService: PagesService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$')]),
      subject: new FormControl(''),
      message: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9,9}$')]),
      product: new FormControl('')
    });
    this.service = (this.pagesService.getContactFormValue())['service'];
    this.dropValues = (this.pagesService.getContactFormValue())['dropValues'];
    this.type = (this.pagesService.getContactFormValue())['type'];
    if (this.type == 2) {
      this.contactForm.controls.product.setValidators(Validators.required);
    }
    else {
      this.contactForm.controls.product.setValidators(null);
    }
    this.contactForm.controls.product.updateValueAndValidity();
  }

  submitContactForm() {
    this.submitted = true;
    var htmlElement;
    if (this.contactForm.valid) {
      var subject = 'Need ' + this.service;
      if (this.type == 2) {
        var products = '';
        (this.contactForm.value.product).forEach(element => {
          products = element.name + ', ' + products;
        });
        htmlElement = `<p><b>Name:</b> ${this.contactForm.value.name},</p>
        <p><b>Mobile Number:</b> ${this.contactForm.value.mobile},</p>
        <p><b>Email Address:</b> ${this.contactForm.value.email},</p>
        <p><b>Products Need:</b> ${products}</p>
        <p><b>Message:</b> ${this.contactForm.value.message},</p>`
      }
      else {
        htmlElement = `<p><b>Name:</b> ${this.contactForm.value.name},</p>
        <p><b>Mobile Number:</b> ${this.contactForm.value.mobile},</p>
        <p><b>Email Address:</b> ${this.contactForm.value.email},</p>
        <p><b>Message:</b> ${this.contactForm.value.message},</p>`
      }

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
              Data: htmlElement
            },
            // Text: {
            //   Charset: 'UTF-8',
            //   Data: 'This is the body of your email.'
            // }
          },
          Subject: {
            Charset: 'UTF-8',
            Data: subject
          }
        },
        Source: 'gmkanna532000@gmail.com', // Sender email address
        // ReplyToAddresses: [optional, add if needed]
      };

      // Create the promise and SES service object
      // const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

      // // Handle promise's fulfilled/rejected states
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

}
