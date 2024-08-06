import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  IsShow: boolean = true;
  showForgetForm: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute, private alertService: AlertService){}

  ngOnInit(){
    // this.router.navigate(['/pages/home']);
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(){
    if(this.loginForm.valid){
      this.router.navigate(['/pages/home']);
    }
    else{
      this.alertService.warning("Please fill the all fields");
    }
  }
}
