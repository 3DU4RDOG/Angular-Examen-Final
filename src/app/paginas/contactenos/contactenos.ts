import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RouterLinkActive} from '@angular/router';

@Component({
  imports: [ RouterLink, RouterLinkActive ],
  selector: 'app-contactenos',
  styleUrl: './contactenos.css',
  templateUrl: './contactenos.html',
})
export class Contactenos {}
