import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  search() {
    let mean = this.txtSearch.nativeElement.value;
    if (mean.trim().length > 0) {
      mean = mean.trim().toLocaleLowerCase();
      this.gifService.searchGifs(mean);

      this.txtSearch.nativeElement.value = '';
    }
  }
  constructor(private gifService: GifsService) {}
}
