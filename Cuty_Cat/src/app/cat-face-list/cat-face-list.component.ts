import { Component, OnInit } from '@angular/core';
import { CatFace } from '../models/cate-face.model';
import { CatFacesService } from '../services/cat-faces.service';

@Component({
  selector: 'app-cat-face-list',
  templateUrl: './cat-face-list.component.html',
  styleUrls: ['./cat-face-list.component.scss']
})
export class CatFaceListComponent implements OnInit {
  
  catFaces!: CatFace[];

  constructor(private catFacesService: CatFacesService) { }

  ngOnInit(): void {
    this.catFaces = this.catFacesService.getAllCatFaces();
  }

}
