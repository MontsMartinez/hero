import { Component } from '@angular/core';
import { Heroe } from '../../heroe';
import { HeroeService } from '../../shares/heroe.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  misHeroes: Heroe[] = [];
  arrImgs2 = [
    { id: '0', img: '../../../assets/images/deku_2.jpg' },
    { id: '1', img: '../../../assets/images/bakugo_2.jpg' },
    { id: '2', img: '../../../assets/images/soto_2.jpg' },
    { id: '3', img: '../../../assets/images/eraser_2.jpg' },
    { id: '4', img: '../../../assets/images/nagant_2.jpg' },
    { id: '5', img: '../../../assets/images/hawks_2.jpg' },
    { id: '6', img: '../../../assets/images/mirio_2.jpg' },
    { id: '7', img: '../../../assets/images/nejire_2.jpg' },
    { id: '8', img: '../../../assets/images/tamaki_2.jpg' },
    { id: '9', img: '../../../assets/images/kurose_2.jpg' },
    { id: '10', img: '../../../assets/images/mirko_2.jpg' },
    { id: '11', img: '../../../assets/images/present_2.jpg' },
  ];
  arrImgs1 = [
    { id: '0', img: '../../../assets/images/deku_1.jpg' },
    { id: '1', img: '../../../assets/images/bakugo_1.jpg' },
    { id: '2', img: '../../../assets/images/soto_1.jpg' },
    { id: '3', img: '../../../assets/images/eraser_1.jpg' },
    { id: '4', img: '../../../assets/images/nagant_1.jpg' },
    { id: '5', img: '../../../assets/images/hawks_1.jpg' },
    { id: '6', img: '../../../assets/images/mirio_1.jpg' },
    { id: '7', img: '../../../assets/images/nejire_1.jpg' },
    { id: '8', img: '../../../assets/images/tamaki_1.jpg' },
    { id: '9', img: '../../../assets/images/kurose_1.jpg' },
    { id: '10', img: '../../../assets/images/mirko_1.jpg' },
    { id: '11', img: '../../../assets/images/present_1.jpg' },
  ];
  constructor(public miservicio: HeroeService) {
    console.log('constructor de heroes');
  }

  ngOnInit(): void {
    this.misHeroes = this.miservicio.getHeroes();
    console.log(this.misHeroes);
  }

  changeImg(event: MouseEvent) {
    // console.log(event.target);

    this.arrImgs2.forEach((item, i) => {
      if (event.target instanceof HTMLImageElement) {
        if (event.target.id == item.id) {
          event.target.setAttribute('src', item.img);
        }
      }
    });
  }

  returnImg(event: MouseEvent) {
    this.arrImgs1.forEach((item, i) => {
      if (event.target instanceof HTMLImageElement) {
        if (event.target.id == item.id) {
          event.target.setAttribute('src', item.img);
        }
      }
    });
  }
}
