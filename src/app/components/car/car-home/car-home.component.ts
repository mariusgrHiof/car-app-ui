import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  deleteCar(id: Number) {
    if (confirm('Are you sure?')) {
      this.carService.deleteCarById(id).subscribe({
        next: () => {
          this.loadCars();
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }
}
