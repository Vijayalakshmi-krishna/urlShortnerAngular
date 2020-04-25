import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UrlShortnerService {

  constructor(private http:HttpClient) { }

  generateURLShortner(data):Observable<any>
  {
    return this.http.post('http://localhost:3000/generateURL',data);
  }

  getAllUrlData():Observable<any>
  {
    return this.http.get('http://localhost:3000/getallurl');
  }

  getURLShort(shorturl):Observable<any>
  {
    console.log("in service");
    console.log(shorturl);
    return this.http.get('http://localhost:3000/redirecturl/'+shorturl);
  }
}
