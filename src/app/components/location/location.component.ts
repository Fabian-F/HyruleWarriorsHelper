import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnemyType, MapLocation, TileLocation } from 'src/app/models';
import { Maps } from 'src/assets/data/map-data/maps.data';

const notAdventureMap = [
  "Legend Mode",
  "Challenge Mode",
  "Rewards Map"
]

@Component({
  selector: 'hwh-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  isAdventureMap = false;
  private router = inject(Router);

  @Input()
  location!: MapLocation;

  ngOnInit() {
    this.isAdventureMap = !(notAdventureMap.includes(this.location.map))
  }

  navigateToTile(tile: TileLocation) {
    if (!this.isAdventureMap) return;

    const map = this.location.map;
    const tileCoords = tile.tile;

    const mapPath = Maps.find(elem => elem.name === map)?.path;
    const fullTileUrl = `/map/${mapPath}?search=${tileCoords}`;
    this.router.navigateByUrl(fullTileUrl);
  }
}
