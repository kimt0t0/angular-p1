import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {
  showSecretWord = false;
  clickCounter = 0;
  clicks = [];

  onClickDo() {
    this.clickCounter += 1;
    this.clicks.push(this.clickCounter);
    this.showSecretWord = true;
  }

  getClick(click) {
    return "Click number " + click + "."
  }

}
