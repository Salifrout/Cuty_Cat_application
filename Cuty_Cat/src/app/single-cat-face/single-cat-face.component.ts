import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatFace } from '../models/cate-face.model';
import { CatFacesService } from '../services/cat-faces.service';


@Component({
  selector: 'app-single-cat-face',
  templateUrl: './single-cat-face.component.html',
  styleUrls: ['./single-cat-face.component.scss']
})
export class SingleCatFaceComponent implements OnInit {
  catFace!: CatFace;
  buttonText!: string;

  constructor(private catFacesService: CatFacesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = 'So cute !';
    const catFaceId = +this.route.snapshot.params['id'];
    this.catFace = this.catFacesService.getCatFaceById(catFaceId)!;
  }

  onSnap() {
    if (this.buttonText == 'So cute !') {
      this.catFacesService.snapCatFaceById(this.catFace.id, 'snap');
      this.buttonText = 'Not that cute !'
    } else {
      this.catFacesService.snapCatFaceById(this.catFace.id, 'unsnap');
      this.buttonText = 'So cute !';
    }
  }
}
