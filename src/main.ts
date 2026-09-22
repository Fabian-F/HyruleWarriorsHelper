import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const redirect = sessionStorage.getItem('github-pages-redirect');

if (redirect) {
  sessionStorage.removeItem('github-pages-redirect');

  const { route, search, hash } = JSON.parse(redirect);

  window.history.replaceState(null, '', route + search + hash);
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
