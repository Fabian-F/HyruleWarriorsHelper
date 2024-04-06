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
  search = new EventEmitter<string>();

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
    this.search.emit(this.value);
  }

  clearSearch() {
    this.value = undefined;
    this.onSearch();
  }
}
