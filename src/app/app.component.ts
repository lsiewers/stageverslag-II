import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navActive = false;
  bgColor: string;
  scrollTop: number;

  constructor(
  ) {}

  loadBackground(e) { this.bgColor = e.data$ ? e.data$._value.items.color : null; }
  setBackground(e) { this.bgColor = e.color; }

  showNav() { this.navActive = true; }
  hideNav(e) {
    this.navActive = false;
    this.scrollTop = 0;
  }
}
