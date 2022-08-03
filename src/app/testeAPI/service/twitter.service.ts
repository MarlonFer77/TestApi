import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  private readonly baseUrl = "https://api.twitter.com/2/users/by/username/yick_marlon"

  constructor(
    private http: HttpClient
  ) { }

  findUserByUsername() {
    const token:string =  "AAAAAAAAAAAAAAAAAAAAAGVEfgEAAAAABPxvyTkbmV2%2BVgPlq0kOyEkXH2U%3DtOlTas3b3Tz5vnoOt1wEW3TEgtMZPew2chXXcshx9dWNjRkezd"
    return this.http.get<any>(this.baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
