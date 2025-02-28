import { Component, computed, Input, input, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'itl-series',
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
  standalone: true
})
export class SeriesComponent {
  // count: WritableSignal<number> = signal(0); // Like an observable
  // doubleCount: Signal<number> = computed(() => this.count() * 2); //Computed which is always dependent on obserbale i.e. signal. They are readonly

  @Input() _showHideSonalikaSeries: WritableSignal<boolean> = signal(false);
  @Input() _showHideSolisSeries: WritableSignal<boolean> = signal(false);

  public get getShowHideSonalikaSeries() {
    return this._showHideSonalikaSeries;
  }
  public set setShowHideSonalikaSeries(value: WritableSignal<boolean>) {
    this._showHideSonalikaSeries = value;
  }

  public get getShowHideSoliceSeries() {
    return this._showHideSolisSeries;
  }
  public set setShowHideSoliceSeries(value:WritableSignal<boolean>) {
    this._showHideSolisSeries = value;
  }
}
