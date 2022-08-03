import { Component, OnInit } from '@angular/core';
import { TwitterApi } from 'twitter-api-v2'
import { User } from './models/user';
import { TwitterService } from './testeAPI/service/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  userTest!: User

  constructor(
    private twitterService: TwitterService
  ) {}
  ngOnInit(): void {
    this.findUserById()
  }

  findUserById() {
    return this.twitterService.findUserByUsername().subscribe(
      (user) => {
        console.log(user);
        
      }
    )
  }
}
