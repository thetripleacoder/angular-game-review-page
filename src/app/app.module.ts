import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ReviewFormComponent, ReviewListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
