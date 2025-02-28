import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SeriesComponent } from "../series/series.component";

@Component({
  selector: 'itl-main-content',
  imports: [RouterLink, SeriesComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  standalone: true
})
export class MainContentComponent {

  showHideSonalikaSeries: WritableSignal<boolean> = signal(false);
  showHideSolisSeries: WritableSignal<boolean> = signal(false);
}
