import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  url : string ='http://localhost:8000/api/users/'

  constructor(private http : HttpClient) {}

  registerNewUser(userData): Observable <any> {
    return this.http.post(this.url, userData)
  }

}
