import { Component, Input, input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Heroe } from '../../heroe';
import { HeroeService } from '../../shares/heroe.service';

@Component({
  selector: 'app-unheroe',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './unheroe.component.html',
  styleUrl: './unheroe.component.css',
})
export class UnheroeComponent {
  @Input() heroe!: Heroe;

  constructor(
    public heroeService: HeroeService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = heroeService.getUnHeroe(params['id']);
    });
  }
}
