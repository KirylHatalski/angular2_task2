interface ICoordinates {
  latitude: number;
  longitude: number;
}

interface IPositionNavigator {
  coords: ICoordinates;
}

interface IWindow extends Window {
  googleResponse: Function;
}
