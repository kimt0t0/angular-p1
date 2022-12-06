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
  servers = ['Test Server', 'Test Server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {}

  createServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created with name --- " + this.serverName + " !";
  }
}
