import { Routes } from '@angular/router/src/config';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { ContentPageService } from './components/content-page/content-page.service';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'content-page/:id/:title',
    component: ContentPageComponent,
    resolve: {
      items: ContentPageService
    }
  }
];
