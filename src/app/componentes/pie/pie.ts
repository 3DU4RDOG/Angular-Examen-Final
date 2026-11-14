import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RouterLinkActive} from '@angular/router';

@Component({
  imports: [ RouterLink, RouterLinkActive],
  selector: 'app-pie',
  styleUrl: './pie.css',
  templateUrl: './pie.html',
})
export class Pie {}
