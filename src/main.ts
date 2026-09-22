import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const redirect = sessionStorage.getItem('github-pages-redirect');

if (redirect) {
  sessionStorage.removeItem('github-pages-redirect');
  window.history.replaceState(null, '', redirect);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
