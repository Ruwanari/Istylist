import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
}
export class Hero {
  id: number;
  name: string;
}

export class Navbar {
  name:string;
}