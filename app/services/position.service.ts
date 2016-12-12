import {Injectable} from '@angular/core';
import '../interfaces/position.interface';

@Injectable()
export class PositionServise {

    getPosition(): Promise<Object> {
        let coords: ICoordinates;

        function getRandom(range: number) {
            return (Math.random() * range) - (range / 2);
        }

        return new Promise((resolve: Function, reject: Function) => {
            navigator.geolocation.getCurrentPosition(
                (position: IPositionNavigator) => {
                    coords = position.coords;
                    resolve(coords);
                },
                () => {
                    console.log('Something going wrong');
                    coords.latitude = getRandom(180);
                    coords.longitude = getRandom(360);

                    resolve(coords);
                });
        });
    };
}
