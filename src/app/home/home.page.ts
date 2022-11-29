import { Component } from '@angular/core';
import { RequestlibService } from '../Services/requestlib.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public username: any;
  public password: any;

  constructor(public requestLib: RequestlibService) {
    // will be changed depends on where the IP
    // of the API server will be deployed.
    this.requestLib.setURI('http://localhost:5050');
  }

  login() {
    const credentails = {'username': this.username, 'password': this.requestLib.md5(this.password)};
    const accepted = (response) => {
      if (response['status'] == 200) {
        this.requestLib.setCookieValue('token', response['data']['token']);
        this.requestLib.initializeID(response['data']['id']);
      }
    };

    this.requestLib.generateToken(credentails, accepted);
  }
}
