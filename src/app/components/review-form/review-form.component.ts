import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Review } from '../../Review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent implements OnInit {
  @Input() reviews: any[];

  onSubmit(form: NgForm) {
    console.log(form.value);

    let newItem = form.value;
    if (
      newItem.fullName !== '' &&
      newItem.email !== '' &&
      newItem.rating !== '' &&
      newItem.rating !== 'Rating' &&
      newItem.review !== ''
    ) {
      this.reviews.unshift(newItem);
    } else {
    }
    form.resetForm({
      rating: '',
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
