import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent }  from '../components/index.component';
import { WeatherComponent } from '../components/weather.component';
import { GooglemapsComponent } from '../components/googlemaps.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [IndexComponent, WeatherComponent, GooglemapsComponent],
    bootstrap: [IndexComponent]
})
export class IndexModule { }
