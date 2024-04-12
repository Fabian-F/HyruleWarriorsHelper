import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hwh-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Input()
  value: string | undefined = "";

  @Input()
  placeholder = "Search";

  @Output()
  search = new EventEmitter<string | undefined>();

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      if(params['search']) {
        this.value = params['search'];
      }
    })
  }

  onSearch() {
    // disallow empty searches
    if (this.value?.trim().length) {
      this.search.emit(this.value);
    } else {
      this.search.emit(undefined);
    }
  }

  clearSearch() {
    this.value = undefined;
    this.search.emit(this.value);
  }
}
