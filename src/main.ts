import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const redirect = sessionStorage.getItem('github-pages-redirect');

if (redirect) {
  sessionStorage.removeItem('github-pages-redirect');

  const url = new URL(redirect);

  window.history.replaceState(
    null,
    '',
    url.pathname + url.search + url.hash
  );
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
