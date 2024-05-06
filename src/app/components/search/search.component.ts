import { Component } from '@angular/core';
import { UnheroeComponent } from '../unheroe/unheroe.component';
import { Heroe } from '../../heroe';
import { HeroeService } from '../../shares/heroe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [UnheroeComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  nombreh: string = '';
  indice: number = 0;

  miheroe: Heroe = {
    nombre: '',
    alias: '',
    bio: '',
    img: '',
    aparicion: '',
    ocupacion: '',
  };

  constructor(
    private heroeService: HeroeService,
    private activedRoute: ActivatedRoute
  ) {
    this.activedRoute.params.subscribe((params) => {
      this.nombreh = params['nombreh'];
      this.indice = this.heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);

      if (this.indice != -1) {
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }
    });
  }
}
