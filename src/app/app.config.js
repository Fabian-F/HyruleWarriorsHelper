import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
export const appConfig = {
    providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
