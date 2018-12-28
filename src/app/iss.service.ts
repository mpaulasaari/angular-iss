import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class IssService {
  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get('http://api.open-notify.org/iss-now.json')
  }
}
