import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { CarHomeComponent } from './components/car/car-home/car-home.component';

const routes: Routes = [
  { path: '', component: CarHomeComponent },
  { path: 'add', component: AddCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
