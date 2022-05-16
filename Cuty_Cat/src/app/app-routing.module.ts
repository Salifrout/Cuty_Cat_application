import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFaceListComponent } from './cat-face-list/cat-face-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleCatFaceComponent } from './single-cat-face/single-cat-face.component';

const routes: Routes = [
    { path: 'catfaces', component: CatFaceListComponent},
    { path: 'catfaces/:id', component: SingleCatFaceComponent },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
}) 

export class AppRoutingModule {}