import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RouterLinkActive} from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-cabecera',
  styleUrl: './cabecera.css',
  templateUrl: './cabecera.html',
})
export class Cabecera {}
