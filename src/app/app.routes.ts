import { Routes } from '@angular/router';
import { Principal } from './paginas/principal/principal';
import { Contactenos } from './paginas/contactenos/contactenos';

export const routes: Routes = [
  { path: 'principal', component: Principal },
  { path: 'contactenos', component: Contactenos },
  { path: '', redirectTo: './principal', pathMatch: 'full' },
  { path: '**', redirectTo: './contactenos', pathMatch: 'full' }
];
