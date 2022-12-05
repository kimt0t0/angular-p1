import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  serverName = "Toto";
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server created with name --- " + this.serverName + " !";
  }
}
