import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { User } from "../user";
import { Http } from "@angular/http";
import { Subject } from "rxjs/Subject";

import 'rxjs/add/operator/do';

@Injectable()
export class SessionDataService {

  baseUrl = 'http://localhost:4567/api/sessions';
  options = { withCredentials: true };

  userChanged: Subject<User>;

  constructor(private http: Http) { 
    this.userChanged = new Subject<User>();
    }

    login(email: string, password: string): Observable<User> {

      const payload = { email, password };

      return this.http
        .post(this.baseUrl, payload, this.options)
        .map(response => response.status === 201 ? response.json() : null)

//      .do(function (user) {
//          this.userChanged.next(user);
//     });

      //which can also be writen     
      .do(user => this.userChanged.next(user));

    }

    logout(): Observable<User> {
      return this.http
        .delete(`${this.baseUrl}/mine`)
        .map(response => null) // TDO Later: failure
        .do(user => this.userChanged.next(user));

    }
}
