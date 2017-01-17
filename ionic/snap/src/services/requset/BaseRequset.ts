/**
 * Created by kylinhuang on 17/01/2017.
 */

export class BaseRequset{

   host:string = "http://jx1.snap.test.cloud.sengled.com:8000";

   name:any;
   url:any;
   requseBodyJson:any;
  /**
   * callback参数规范：（error,result）;
   */
   callback:Function;

  constructor() { }


  sethost(host:string) {
    this.host = host;
  }

  setname(name:any) {
    this.name = name;
  }

  seturl(url:any) {
    this.url = url;
  }

  setrequseBodyJson(requseBodyJson:any) {
    this.requseBodyJson = requseBodyJson;
  }


  getname():any {
    return this.name;
  }

  geturl():any {
    return this.url;
  }

  getrequseBodyJson():any {
    return this.requseBodyJson;
  }

  gethost():string {
    return this.host;
  }

  // get callback():Function {
  //   return this._callback;
  // }

  // set callback(value:Function) {
  //   this._callback = value;
  // }

}
