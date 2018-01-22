import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MainNavService } from './main-nav.service';
import { ContentPage } from '../content-page/content-page.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Input() getBackground;
  @Output() hideNav = new EventEmitter;
  @Output() setBackground = new EventEmitter;
  items: Observable<ContentPage[]>;
  itemDetail: ContentPage;
  showNav = false;
  backgroundColor = this.getBackground;

  constructor(private service: MainNavService) {
  }

  ngOnInit() {
    this.items = this.service.getData();
    this.backgroundColor = this.getBackground;
  }

  resetColor() {
    this.setBackground.emit({
      color: this.backgroundColor
    });
  }

  setColor() {
    this.setBackground.emit({
      color: this.itemDetail ? this.itemDetail.color : 'grey'
    });
  }

  closeNav(e) { this.hideNav.emit(e); }
  showDetail(item: Object) { this.itemDetail = item; }
}
