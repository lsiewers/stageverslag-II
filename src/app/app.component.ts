import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navActive = false;
  bgColor: string;

  constructor(
    private route: ActivatedRoute,
  ) {}

  loadBackground(e) { this.bgColor = e.data$ ? e.data$._value.items.color : null; }
  setBackground(e) { this.bgColor = e.color; }

  showNav() { this.navActive = true; }
  hideNav(e) { this.navActive = false; }
}
