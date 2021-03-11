import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }
}
