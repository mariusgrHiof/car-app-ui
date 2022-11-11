import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<Car[]>(`${this.baseUrl}/all`);
  }
}
