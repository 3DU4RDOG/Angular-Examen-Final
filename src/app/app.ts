import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './componentes/cabecera/cabecera';
import { Pie } from './componentes/pie/pie';

@Component({
  imports: [RouterOutlet, Cabecera, Pie],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('appGuillen');
}
