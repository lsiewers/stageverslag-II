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
  images = this.data$.map(a => a.items).map(item => item.images);
  imgLoaded = false;
  activeImg = 1;
  hideButton = 'prev';

  constructor(
    private route: ActivatedRoute
  ) {}

  nextImg(e) {
    const length = e.target.parentElement.querySelectorAll('.gallery-img').length;
    if (this.activeImg === length) {
      this.hideButton = 'next';
    } else {
      this.hideButton = '';
    }

    return this.activeImg < length ? this.activeImg++ : null;
  }

  prevImg(e) {
    if (this.activeImg > 1) {
      this.hideButton = 'prev';
    } else {
      this.hideButton = '';
    }

    return this.activeImg > 1 ? this.activeImg-- : null;
  }
}
