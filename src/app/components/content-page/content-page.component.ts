import { Component, OnInit } from '@angular/core';
import { ContentPageService, ContentPage } from './content-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  data$ = this.route.data;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
