import { Component, OnInit, Input } from '@angular/core';
import { CatFace } from '../models/cate-face.model';
import { CatFacesService } from '../services/cat-faces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-face',
  templateUrl: './cat-face.component.html',
  styleUrls: ['./cat-face.component.scss']
})
export class CatFaceComponent implements OnInit {
  @Input() catFace!: CatFace;
  buttonText!: string;

  constructor(private catFacesService: CatFacesService, private router: Router) { }

  ngOnInit() {
    this.buttonText = 'So cute !';
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

  onViewCatFace() {
    this.router.navigateByUrl(`catfaces/${this.catFace.id}`);
  }
}
