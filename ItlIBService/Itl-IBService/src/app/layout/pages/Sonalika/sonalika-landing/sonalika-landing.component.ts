import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'itl-sonalika-landing',
  imports: [RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './sonalika-landing.component.html',
  styleUrl: './sonalika-landing.component.css'
})
export class SonalikaLandingComponent {

  /**
   *
   */
  constructor(private router: Router) {
    
  }

  showParent() :boolean{
    return this.router.url == '/sonalika';
  }
}
