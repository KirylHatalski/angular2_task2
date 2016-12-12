"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("../interfaces/weather.interface");
require("../interfaces/position.interface");
var core_1 = require("@angular/core");
var weather_service_1 = require("../services/weather.service");
var position_service_1 = require("../services/position.service");
var WeatherComponent = (function () {
    function WeatherComponent(WeatherServise, PositionServise) {
        var _this = this;
        this.WeatherServise = WeatherServise;
        this.PositionServise = PositionServise;
        this.PositionServise.getPosition().then(function (coords) { _this.initWeather(coords.latitude, coords.longitude); });
    }
    WeatherComponent.prototype.initWeather = function (lat, lon) {
        var tempWeather = JSON.parse(localStorage.getItem('weather'));
        if (tempWeather) {
            if (Date.now() - tempWeather.createTime > 10 * 60 * 1000) {
                this.WeatherServise.getWeather(lat, lon).then(function (data) {
                    localStorage.setItem('weather', JSON.stringify(data));
                });
            }
        }
        else {
            this.WeatherServise.getWeather(lat, lon).then(function (data) {
                localStorage.setItem('weather', JSON.stringify(data));
            });
        }
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    core_1.Component({
        selector: 'weather',
        providers: [weather_service_1.WeatherServise, position_service_1.PositionServise],
        template: ""
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherServise, position_service_1.PositionServise])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map