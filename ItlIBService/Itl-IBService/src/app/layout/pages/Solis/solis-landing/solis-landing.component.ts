import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'itl-solis-landing',
  imports: [RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './solis-landing.component.html',
  styleUrl: './solis-landing.component.css'
})
export class SolisLandingComponent {
/**
   *
   */
  constructor(private router: Router) {
    
  }

  showParent() :boolean{
    return this.router.url == '/solis';
  }
}
