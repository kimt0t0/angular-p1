import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaycompo',
  templateUrl: './twowaycompo.component.html',
  styleUrls: ['./twowaycompo.component.css']
})
export class TwowaycompoComponent {
  userName = "Toto";

  ngOnInit() {}

  onCheckUserName() {
    if (this.userName == "") {
      return true;
    }
    else { return false; }
  }

  resetUserName() {
    this.userName = "";
  }
}
