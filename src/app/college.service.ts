import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private http: HttpClient) { }
  getAdvanceColleges(gender:string,rank:number,category:string) {
    return this.http.get(`http://104.154.19.219:3001/college/${gender}/${rank}/${category}`);
  }
}
