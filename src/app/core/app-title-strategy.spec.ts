import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter, TitleStrategy, type Routes } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { mapMetadata } from '../../data/maps/map-metadata';
import { routes } from '../app.routes';
import { AppTitleStrategy } from './app-title-strategy';

@Component({ template: '' })
class TestPage {}

// Exercise the real route titles and redirects without rendering the map UI.
const testRoutes: Routes = routes.map((route) =>
  route.path === 'maps/:mapId'
    ? {
        ...route,
        loadComponent: undefined,
        component: TestPage,
        children: route.children?.map((child) => ({
          ...child,
          canActivate: [],
          component: TestPage,
        })),
      }
    : route,
);

describe('AppTitleStrategy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: 'characters', title: 'Characters', component: TestPage },
          { path: 'untitled', component: TestPage },
          ...testRoutes,
        ]),
        { provide: TitleStrategy, useClass: AppTitleStrategy },
      ],
    });
  });

  it('updates the title when switching maps and keeps it when opening tile details', async () => {
    const harness = await RouterTestingHarness.create();
    for (const map of mapMetadata) {
      await harness.navigateByUrl(`/maps/${map.id}`);
      expect(TestBed.inject(Title).getTitle()).toBe(`${map.name} | HW Helper`);
      await harness.navigateByUrl(`/maps/${map.id}/A1`);
      expect(TestBed.inject(Title).getTitle()).toBe(`${map.name} | HW Helper`);
    }
  });

  it('uses the destination title after redirects', async () => {
    const harness = await RouterTestingHarness.create();
    for (const url of ['/', '/home', '/maps', '/maps/invalid', '/unknown']) {
      await harness.navigateByUrl(url);
      expect(TestBed.inject(Title).getTitle()).toBe('Adventure Map | HW Helper');
    }
  });

  it('supports static page titles and resets the title on untitled pages', async () => {
    const harness = await RouterTestingHarness.create('/characters');
    expect(TestBed.inject(Title).getTitle()).toBe('Characters | HW Helper');
    await harness.navigateByUrl('/untitled');
    expect(TestBed.inject(Title).getTitle()).toBe('HW Helper');
  });
});
