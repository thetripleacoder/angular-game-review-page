import { Component, VERSION } from '@angular/core';
import { REVIEWS } from './mock-reviews';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  reviews = REVIEWS;
}
