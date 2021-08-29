import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Review } from '../../review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent implements OnInit {
  @Input() items: any[];

  review = new Review('', '', 0, '');

  getValues(val) {
    console.log(val);

    let newItem = val;
    if (
      newItem.fullName !== '' &&
      newItem.email !== '' &&
      newItem.rating !== '' &&
      newItem.rating !== 'Rating' &&
      newItem.review !== ''
    ) {
      this.items.unshift(newItem);
    } else {
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
