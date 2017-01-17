import {Injectable, Inject} from  '@angular/core';

@Injectable()
export class ConfigService {
  hostURL:string = "http://jx1.snap.test.cloud.sengled.com:8000";

  constructor() {

  }

  getHost() {
    return this.hostURL;
  }


  getLogin() {
    return this.hostURL + "/camera/v1/customer/login.json";
  }
}
