import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatFaceComponent } from './cat-face/cat-face.component';
import { CatFaceListComponent } from './cat-face-list/cat-face-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleCatFaceComponent } from './single-cat-face/single-cat-face.component';

@NgModule({
  declarations: [
    AppComponent,
    CatFaceComponent,
    CatFaceListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleCatFaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
