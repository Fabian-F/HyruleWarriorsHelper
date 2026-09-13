import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
let App = class App {
    title = signal('hyrule-warriors-helper');
};
App = __decorate([
    Component({
        imports: [RouterOutlet],
        selector: 'app-root',
        styleUrl: './app.scss',
        templateUrl: './app.html',
    })
], App);
export { App };
