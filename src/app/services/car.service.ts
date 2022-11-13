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
    return this.http.get<Car[]>(`${this.baseUrl}/car/all`);
  }

  addCar(car: Car) {
    return this.http.post<Car>(`${this.baseUrl}/car/add`, car);
  }

  editCar(id: Number, car: Car) {
    return this.http.put<Car>(`${this.baseUrl}/car/update/${id}`, car);
  }

  getCarById(id: Number) {
    return this.http.get<Car>(`${this.baseUrl}/car/find/${id}`);
  }
}
