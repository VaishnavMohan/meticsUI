import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';    
import { AppComponent } from 'src/app/app.component';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // myform: FormGroup<{ username: FormControl<string>; password: FormControl<string>; }>;
  // myform: FormGroup<{}>;
public user: any;
loginSupplier = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
})

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.myform = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl('')
    // })

    this.user = {
      "email": '',
      "password": ''
    };

  }

  userLogin(){
    if(this.loginSupplier.valid){
      // console.warn(this.loginSupplier.value)
      this.authService.loginUser(this.loginSupplier.value).subscribe((result)=>{
        // console.warn("result is ", result)
        if(result){
          console.log(result);
          this.router.navigate(['dashboard']);
        }else{
          console.warn("not correct");
        }
      } )

    }
  }

  // get f() {
  //   return this.myform.controls;
  // }

  // login() {
  //   this.authService.login({'email': this.user.email, 'password':this.user.password});
  // }



  // onSubmit() {
  //   this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe
  //   data => {
  //     console.log(data);
  //   }
  //  }
  refreshToken(){
    this.authService.refreshToken();
  }

  logout(){
    this.authService.logout();
  }
}
