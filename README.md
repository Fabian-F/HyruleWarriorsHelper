# HWDE-Tracker

Interactive maps and collectible tracking for **Hyrule Warriors: Definitive Edition** on Nintendo Switch.

Maintained by **Rueben Gill** ([Rue-G19](https://github.com/Rue-G19)); based on the original project by [Fabian-F](https://github.com/Fabian-F/HyruleWarriorsHelper).

## Features

- Interactive Adventure Mode maps, map search, tile details, and farming locations.
- Checklists for treasure and Gold Skulltulas, plus Legend Mode heart pieces, heart containers, and weapons.
- Completion percentages by tile and map, with an overall progress dashboard.
- Local progress saving with JSON export and import. Imports merge with saved progress.
- Installable, offline-capable browser app; images are cached as they are viewed.
- Windows desktop app that does not need a local web server.

Browser and desktop saves use separate local storage. Export a backup from one version and import it into the other to transfer progress.

## Hosted website can be found here: 
https://rue-g19.github.io/HWDE-Tracker/#/home

## Download and launch

To install the Windows desktop app, run the installer from the Releases page. To run the browser version, double-click `Start HWDE-Tracker Browser.bat`; it serves the bundled app at `http://127.0.0.1:4200`. The browser launcher uses PowerShell included with Windows and does not require Node.js or a project checkout. Progress already saved by that browser profile is loaded automatically.

The hosted site can also be installed from a supported browser's app-install option. Its app shell and map data are available offline; visit the maps and tile details whose images you want cached before going offline.

## Build the distributions

Install [Node.js](https://nodejs.org/) and project dependencies, then build one or both distributions:

```sh
npm install
npm run build
npm run build:desktop
```

`npm run build` writes the production browser app to `DIST DESKTOP\Browser`. `npm run build:desktop` writes the Windows installer and its packaging output to `DIST DESKTOP\Windows`. The app can also be run from source during development with `npm start`, or as a desktop app with `npm run desktop:dev`.

## Development and tests

```sh
npm install
npm start
npm test -- --watch=false
```

Open `http://localhost:4200` while the development server is running. Contributions and bug reports are welcome via the [GitHub repository](https://github.com/Rue-G19/HWDE-Tracker).

## Credits and disclaimer

Thanks to Fabian-F for the original project, and to EnMod and cheatfreak47 for their contributions to browser compatibility and Legend Mode assets and mockups. Additional data and image sources are credited in the app's **Credits** page.

Hyrule Warriors and The Legend of Zelda are properties of their respective owners. This fan project is not affiliated with or endorsed by Nintendo, Koei Tecmo, or Omega Force.
