import { Routes } from '@angular/router/src/config';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { ContentPageService } from './components/content-page/content-page.service';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MainNavService } from './components/main-nav/main-nav.service';


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
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
