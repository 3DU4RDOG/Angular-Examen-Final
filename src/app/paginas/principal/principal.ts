import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RouterLinkActive} from '@angular/router';

@Component({
  imports: [ RouterLink, RouterLinkActive ],
  selector: 'app-principal',
  styleUrl: './principal.css',
  templateUrl: './principal.html',
})
export class Principal {}
