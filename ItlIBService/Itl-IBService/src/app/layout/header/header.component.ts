import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'itl-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink]
})
export class HeaderComponent {

}
