import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { AboutComponent } from './paginas/about/about.component';
import { HeroesComponent } from './paginas/heroes/heroes.component';
import { UnheroeComponent } from './components/unheroe/unheroe.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: UnheroeComponent },
  { path: 'buscador/:nombreh', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
