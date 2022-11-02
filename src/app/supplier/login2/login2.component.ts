import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  public user: any;
regsupplier = new FormGroup({
  first_name: new FormControl(''),
  last_name: new FormControl(''),
  password: new FormControl(''),
  password2: new FormControl(''),
  phone: new FormControl(''),
  designation: new FormControl(''),
  address: new FormControl(''),
  city: new FormControl(''),
  country: new FormControl(''),
  zipcode: new FormControl(''),
  username: new FormControl(''),
  middle_name: new FormControl('')
})

  constructor( 
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = {
      "first_name": '',
      "last_name": '',
      "password": '',
      "password2": '',
      "phone": '',
      "designation": '',
      "address": '',
      "city": '',
      "country": '',
      "zipcode": '',
      "username": '',
      "middle_name": '',
    }
  }
  
  registrationUser(){
    if(this.regsupplier.valid){
      // console.warn(this.regsupplier.value)
      this.authService.RegUser1(this.regsupplier.value).subscribe((result)=>{
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


}
