import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // items = ['Angular 4', 'React', 'Underscore'];

  // newItem = '';

  items = [
    {
      fullName: 'Fern Castro',
      email: 'fern.castro@ttec-demo.com',
      rating: 5,
      review:
        'Stunning and awesome gameplay. The game might be old, but it has stood the test of time.'
    },
    {
      fullName: 'Sophia Parsons',
      email: 'sophia.parsons@ttec-demo.com',
      rating: 4,
      review: 'Top-notch. Got a few life lessons here and there.'
    },
    {
      fullName: 'Trista Porter',
      email: 'trista.porter@ttec-demo.com',
      rating: 3,
      review: 'Really good game, overrated though.'
    },
    {
      fullName: 'Percival Conner',
      email: 'percival.conner@ttec-demo.com',
      rating: 5,
      review: 'Buying this below the full price was a mistake.'
    },
    {
      fullName: 'Ellen Swanson',
      email: 'ellen.swansons@ttec-demo.com',
      rating: 5,
      review:
        '2 decades of gaming, this is the greatest game I have ever played and will ever play.'
    }
  ];

  getValues(val) {
    console.log(val);
    // let time = new Date();
    // val.time = time;
    let newItem = val;
    if (
      newItem.fullName !== '' &&
      newItem.email !== '' &&
      newItem.rating !== '' &&
      newItem.rating !== 'Rating' &&
      newItem.review !== ''
    ) {
      this.items.push(newItem);
    } else {
    }
  }

  getUrl() {
    return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
  }
}
