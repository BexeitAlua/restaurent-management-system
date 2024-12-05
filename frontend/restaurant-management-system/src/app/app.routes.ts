import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ReservationComponent } from '../reservation/reservation.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
   
    {path: 'reservation', component: ReservationComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
