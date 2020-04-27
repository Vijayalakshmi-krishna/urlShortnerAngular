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
    return this.http.post('https://url-shortner-nodejs.herokuapp.com/generateURL',data);
  }

  getAllUrlData():Observable<any>
  {
    return this.http.get('https://url-shortner-nodejs.herokuapp.com/getallurl');
  }

  getURLShort(shorturl):Observable<any>
  {
    
    return this.http.get('https://url-shortner-nodejs.herokuapp.com/'+shorturl);
  }

  deleteURL(shorturlid):Observable<any>
  {
    return this.http.delete('https://url-shortner-nodejs.herokuapp.com/deleteurl/'+shorturlid)
  }
}
