import '../interfaces/position.interface';
import '../interfaces/weather.interface';

import { Component } from '@angular/core';
import { PositionServise } from '../services/position.service';
import { MarkerServise } from '../services/marker.service';

@Component({
    selector: 'googlemaps',
    providers: [PositionServise, MarkerServise],
    template: `<div class='map'></div>`
})

export class GooglemapsComponent {
    tmarkerServise: MarkerServise;
    tpositionServise: PositionServise;
    constructor(PositionServise: PositionServise, MarkerServise: MarkerServise) {
        this.tpositionServise = PositionServise;
        this.tmarkerServise = MarkerServise;

        this.tpositionServise.getPosition().then((data: ICoordinates) => {
            this.initMap(data)
        });
    }

    initMap(coords: ICoordinates) {
        let elem = document.createElement('script'),
            map: google.maps.Map,
            markers: IWeather;


        elem.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA2BbPGgt4MP4YD12z5AftgBgGS9vitNJE&callback=googleResponse`;
        document.body.appendChild(elem);

        (<IWindow>window).googleResponse = () => {
            markers = JSON.parse(localStorage.getItem('weather'));

            map = new google.maps.Map(document.querySelector('.map'), {
                center: { lat: coords.latitude, lng: coords.longitude },
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            });

            if (localStorage.getItem('weather')) {
                this.tmarkerServise.createMarkers(markers.list, map);
            } else { //hehehe
                setTimeout((<IWindow>window).googleResponse, 2000);
            }
        }
    }
}
