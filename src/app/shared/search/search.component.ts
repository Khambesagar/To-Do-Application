import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchTermChanged = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch() {
    this.searchTermChanged.emit(this.searchTerm);
  }
}
