import { Component, OnInit } from '@angular/core';
//import { url } from 'inspector';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
myname:string;
job_title:string;
profile="assets/profile.jpg";
  constructor() { 
    this.myname="Fatma sobhy Elkhateeb";
    this.job_title="Frontend and Flutter developer";
  }

  ngOnInit(): void {
  }

}
