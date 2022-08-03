import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TwitterService } from '../testeAPI/service/twitter.service';
import { AppComponent } from '../app.component';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private twitterService: TwitterService
  ) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = "AAAAAAAAAAAAAAAAAAAAAGVEfgEAAAAABPxvyTkbmV2%2BVgPlq0kOyEkXH2U%3DtOlTas3b3Tz5vnoOt1wEW3TEgtMZPew2chXXcshx9dWNjRkezd"

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAGVEfgEAAAAABPxvyTkbmV2%2BVgPlq0kOyEkXH2U%3DtOlTas3b3Tz5vnoOt1wEW3TEgtMZPew2chXXcshx9dWNjRkezd',
    });

    

    if (token) {
      const clone = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`) 
      })
      
      return next.handle(clone)
    }

    return next.handle(request);
  }
}
