import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  images: any[] = [];
  constructor(private gifsService: GifsService) {}
  get results() {
    return this.gifsService.results;
  }
}
