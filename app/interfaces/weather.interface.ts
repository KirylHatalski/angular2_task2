interface IWeather {
  createTime: number;
  cod: string;
  list: Array<IDataListItem>;
  message: string;
}

interface IDataListItem {
  coord: IAnotherCoords;
  weather: Array<IIcons>;
  main: ITemperatyre;
  name: string;
}

interface IIcons {
  icon: string;
}

interface IMarkData {
  list: Array<IDataListItem>;
}

interface IAnotherCoords {
  lat: number;
  lon: number;
}

interface ITemperatyre {
  temp: number;
}

interface IWeatherServise {
  getWeather: Promise<Object>;
}
