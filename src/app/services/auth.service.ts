import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

// const httpoptions = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//     })
// };

@Injectable(
  {
  providedIn: 'root'
}
)
export class AuthService {
private httpOptions: any;
public token: string;
public token_expires: Date;
public email: string;
public errors: any = [];


  api_url: string = 'http://metics.us:8000/login/'

  constructor(private http: HttpClient) { 
    this.httpOptions = { 
      Headers: new HttpHeaders({'Content-Type': 'application/json' }) }
  }

  loginUser(data){
    // console.warn("service",data)
    return this.http.post(this.api_url, data)
  }

// login(username: string, password: string){
//   return this.http.post<any>(this.api_url + 'login/',
//   {username, password}, httpoptions).pipe(
//     map(user => {
//       if(user && user.token){
//         localStorage.setItem("currentUser", JSON.stringify(user));
//       }
//       return user;
//     })
//   );
  
// }

public login(user){
  this.http.post('http://metics.us:8000/login/', JSON.parse(user), this.httpOptions).subscribe(
    data => {
      this.updateData(data['token']);
    },
    err => {
      this.errors = err['error'];
    }
  );
}

public refreshToken() {
  this.http.post('/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
    data => {
      this.updateData(data['token']);
    },
    err => {
      this.errors = err['error'];
    }
  );
}

public logout() {
  this.token = null;
  this.token_expires = null;
  this.email = null;
}

private updateData(token) {
  this.token = token;
  this.errors = [];

  // decode the token to read the email and expiration timestamp
  const token_parts = this.token.split(/\./);
  const token_decoded = JSON.parse(window.atob(token_parts[1]));
  this.token_expires = new Date(token_decoded.exp * 1000);
  this.email = token_decoded.email;
}

// logout(){
//   localStorage.removeItem('currentUser');
// }

}
