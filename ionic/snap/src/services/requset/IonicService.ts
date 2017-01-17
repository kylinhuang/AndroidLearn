import {Injectable, Inject} from  '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from  'rxjs/Observable';
import 'rxjs/Rx';


import { BaseRequset } from 'BaseRequset';



@Injectable()
export class IonicService {



  public cookie:any ;


   _request:XMLHttpRequest;

  hostURL:string = "http://jx1.snap.test.cloud.sengled.com:8000";

  constructor(
    private http:Http,
  ) {

  }



  // 处理错误
  private handleError(error: Response) {
    console.log("handleError   "  +error);
    return Observable.throw(error.json().error || 'Server Error');
  }




  postUserLogin() {
    // var url = this.hostURL + "/camera/v1/customer/login.json";

    var json = {"user":"hwz@sengled.com","pwd":"123456","os_type":"android","uuid":"230a00969adc238b"};

    console.log("json "  +json.toString());
    // http://snap.cloud.sengled.com:8000/camera/v1/customer/login.json
    let url = this.hostURL + "/camera/v1/customer/login.json";

    console.log("url "  + url);
    // let body = ;
    let headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    headers.append("Access-Control-Allow-Origin","*");


    return this.http.post(url, json.toString(), {headers: headers}).map(
      res=>res.json()
    ).catch(this.handleError);
  }


    send(baseRequset ) :any {

      let requestJson = baseRequset.requseBodyJson ;


      this._request = new XMLHttpRequest();
      this._request.timeout = 1000 * 5;
      let requestError:any = {};

      this._request.addEventListener("error",(errorEvent)=>{
        console.log("HttpPipe-> send-> errorListener" + errorEvent.message);
        baseRequset.callback(requestError,null);
        // return "";
      });
      this._request.addEventListener("timeout",(timeoutEvent)=>{
        console.log("HttpPipe-> send-> timeoutListener" + timeoutEvent.toString());
        // callback(requestError,null);
        baseRequset.callback(requestError,null);
        // return "";
      });
      this._request.onreadystatechange = ()=>{
        if (this._request.readyState == 4) {
          if(this._request.status == 200){
            console.log("HttpPipe-> send-> response success: " +  this._request.response );
            // console.log("HttpPipe-> send-> response success: " + this._request.responseText);
            // callback(null,JSON.parse(this._request.responseText));
            // JSON.parse(this._request.responseText)
            // return JSON.parse(this._request.responseText);
            baseRequset.callback(null,this._request.responseText);
          }else{
            console.log("HttpPipe-> send-> request.status: " + this._request.status);
            // return "";
            baseRequset.callback( requestError , null );
            // callback(requestError,null);
          }
        }
      };

      // if(sendJsonParams.jsessionid){
      //   this._request.withCredentials = true;
      //   document.cookie = "JSESSIONID=" + sendJsonParams.jsessionid;
      //   // this._request.setRequestHeader("Cookie",sendJsonParams.cookie); //refuse
      // }else{
      //   this._request.withCredentials = false;
      //   document.cookie = "";
      // }

      let url = baseRequset.host + baseRequset.url;
      // let url:string = sendJsonParams.url;
      // let index = url.indexOf("/",url.lastIndexOf(":"));
      // let baseUrl:string = url.substring(0,index);
      // let jseesionid:string = sendJsonParams.jsessionid?sendJsonParams.jsessionid:"";
      // let cookieOptions:{isUseCookie:boolean,baseUrl:string,cookieName:string,cookieValue:string} = {
      //   isUseCookie : sendJsonParams.jsessionid?true:false,
      //   baseUrl:baseUrl,
      //   cookieName:"JSESSIONID",
      //   cookieValue:jseesionid
      // };

      this._post(url,requestJson);
      // this._handleCookie(cookieOptions).then(()=>{
      //   if (sendJsonParams.method.toUpperCase() == "POST") {
      //     this._post(sendJsonParams.url,sendJsonParams.body?sendJsonParams.body:null);
      //   }
      // });
    }


  private _post(url,requestJson){
    this._request.open("POST",url,true);
    this._request.setRequestHeader("Content-Type","application/json");
    this._request.setRequestHeader("Access-Control-Allow-Origin","*");

    // if ( null == cookie||cookie.length == 0 ){
    //   this._request.setRequestHeader("Cookie","JSESSIONID=" + cookie);
    // }



    // httpPost.addHeader("Cookie", "JSESSIONID=" + cookie);


    // 指定允许其他域名访问
// // 响应类型
//     header('Access-Control-Allow-Methods:POST');
// // 响应头设置
//     header('Access-Control-Allow-Headers:x-requested-with,content-type');
    if(requestJson){
      this._request.send(JSON.stringify(requestJson));
    }else {
      this._request.send(null);
    }
  }

}
