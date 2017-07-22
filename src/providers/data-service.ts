import { Injectable } from '@angular/core';
/* tslint:disable */
import { Http, Response } from "@angular/http";
/* tslint:enable */
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getListDetails(){
    //return this.http.get('assets/details/listDetails.json')
    //.map((response:Response)=>response.json());
    return this.http.get('assets/data/category_details.json')
      .map((response:Response)=>response.json());
  }

}
