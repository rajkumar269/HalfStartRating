import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ac-star-rating [rating]="rating"></ac-star-rating>`
})
export class AppComponent {
    public rating: number = .7;
}
