import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const redirect = sessionStorage.getItem('github-pages-redirect');

if (redirect) {
  sessionStorage.removeItem('github-pages-redirect');
  window.history.replaceState(null, '', redirect);
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
