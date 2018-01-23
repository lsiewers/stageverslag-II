import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { routes } from './app-routing';
import { ContentPageService } from './components/content-page/content-page.service';
import { MainNavService } from './components/main-nav/main-nav.service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ContentPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ContentPageService,
    MainNavService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
