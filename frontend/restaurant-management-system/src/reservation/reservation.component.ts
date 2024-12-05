import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TopBarComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  reservations = [
    { id: 1, name: 'John Doe', date: '2023-06-15', time: '19:00', guests: 4 },
    { id: 2, name: 'Jane Smith', date: '2023-06-16', time: '20:30', guests: 2 },
  ];

  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    // Initialize the form in the constructor
    this.reservationForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      guests: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {}

  addReservation() {
    if (this.reservationForm.valid) {
      const newReservation = { ...this.reservationForm.value, id: this.reservations.length + 1 };
      this.reservations.push(newReservation);
      this.reservationForm.reset();
    }
  }
}
