import { Injectable } from '@angular/core';
import { CatFace } from '../models/cate-face.model';

@Injectable({
  providedIn: 'root'
})
export class CatFacesService {
  catFaces: CatFace[] = [
    {
    id: 1,
    title: 'Capucine',
    description: 'It was born an orphan. My daughter pushed me to adopt it! I don\'t regret that at all. Cute, isn\'t it ?',
    imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/archive/JDjWgH0FbyyK8yq-TCaI_Coby10.jpeg',
    createdDate: new Date(),
    snaps: 50
  },
  {
    id: 2,
    title: 'Salome',
    description: 'I\'ld die for keeping it in my arms!... ',
    imageUrl: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    createdDate: new Date(),
    snaps: 0
  },
  {
    id: 3,
    title: 'Lucy',
    description: 'The mine\'s head is showing when it is hungry. Do you want to give it to eat as I do ?',
    imageUrl: 'https://images.unsplash.com/photo-1602418013963-c1f017b3bb63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    createdDate: new Date(),
    snaps: 0
  },
  {
    id: 4,
    title: 'Donald Jr.',
    description: 'Tell me how you feel seing that ! Gosh, my heart beats so fast !',
    imageUrl: 'https://pbs.twimg.com/media/D-KepnMUIAAth93.jpg',
    createdDate: new Date(),
    snaps: 0
  },
  {
    id: 5,
    title: 'A lost one I found in a beauty pageant',
    description: 'What do u think about this one ?',
    imageUrl: 'https://s2.dmcdn.net/v/ABY7h1LUla3VkUKKg/x1080',
    createdDate: new Date(),
    snaps: 0,
    orphan: 1
  }
];

getAllCatFaces(): CatFace[] {
  return this.catFaces;
};

getCatFaceById(catFaceId: number): typeof catFace {
  const catFace = this.catFaces.find(catFace => catFace.id === catFaceId);
  if (!catFace) {
      throw new Error('catFace not found!');
  } else {
      return catFace;
  }
};

snapCatFaceById(catFaceId: number, snapType: 'snap' | 'unsnap'): void {
  /*const catFace = this.catFaces.find(catFace => catFace.id === catFaceId);
  if (catFace) {
      catFace.snaps++;
  } else {
      throw new Error('catFace not found!');
  }*/
  const catFace = this.getCatFaceById(catFaceId);
  if ( catFace && snapType === 'snap') {
    catFace.snaps++;
  } else if (catFace && snapType === 'unsnap') {
    catFace.snaps--;
  }
  /*snapType === 'snap' ?  catFace.snaps++ : catFace.snaps--;*/
};

}


