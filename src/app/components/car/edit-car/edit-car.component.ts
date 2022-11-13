import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css'],
})
export class EditCarComponent implements OnInit {
  car: Car = {
    id: 0,
    make: '',
    model: '',
    hp: 0,
    imageUrl: '',
  };
  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCar();
  }
  EditCar() {
    return this.carService.editCar(this.car.id, this.car).subscribe({
      next: (car) => {
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getCar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.carService.getCarById(id).subscribe({
      next: (car: Car) => {
        this.car = car;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
}
