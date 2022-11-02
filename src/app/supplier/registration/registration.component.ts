import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: any;
  Orgsupplier = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
    address_line1: new FormControl(''),
    address_line2: new FormControl(''),
    postal_code: new FormControl(''),
    number_of_employees: new FormControl('')

  })

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = {
      "name": '',
      "country": '',
      "address_line1": '',
      "address_line2": '',
      "postal_code": '',
      "number_of_employees": ''
    };
  }

  orgLogin(){
    if(this.Orgsupplier.valid){
      // console.warn(this.Orgsupplier.value)
      this.authService.OrganisationUser(this.Orgsupplier.value).subscribe((result)=>{
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
