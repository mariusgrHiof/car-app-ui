import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  car: Car = {
    make: '',
    model: '',
    hp: 0,
    imageUrl: '',
  };
  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {}

  addCar() {
    this.carService.addCar(this.car).subscribe({
      next: (car: Car) => {
        this.car = car;
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
}
