import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent {
  data$ = this.route.data;
  logo = this.data$.map(a => a.items).map(item => item.logo);

  constructor(
    private route: ActivatedRoute
  ) { }
}
