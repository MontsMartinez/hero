import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  title = 'routing';

  constructor(private router: Router) {}

  buscarUnHeroe(nombre: String) {
    this.router.navigate(['/buscador', nombre]);
  }
}
