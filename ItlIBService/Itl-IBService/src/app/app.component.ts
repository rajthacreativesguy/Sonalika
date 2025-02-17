import { Component } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'itl-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [LayoutComponent]
})
export class AppComponent {
}
