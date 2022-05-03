import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-face',
  templateUrl: './cat-face.component.html',
  styleUrls: ['./cat-face.component.scss']
})
export class CatFaceComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Capucine';
    this.description = 'It was born an orphan. My daughter pushed me to adopt it! I don\'t regret that at all. Cute, isn\'t it ?';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://mymodernmet.com/wp/wp-content/uploads/archive/JDjWgH0FbyyK8yq-TCaI_Coby10.jpeg';
  }
}
