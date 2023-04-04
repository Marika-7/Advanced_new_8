import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public itemIsOpen = false;

  itemOpen(): void {
    this.itemIsOpen = !this.itemIsOpen;
  }

}
