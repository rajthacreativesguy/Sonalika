import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'itl-main-content',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  standalone: true
})
export class MainContentComponent {

  showHide: boolean=false;
  onMouseEnter(showHide: boolean) {
    console.log('showHide', showHide);
    this.showHide = showHide;
  }
}
