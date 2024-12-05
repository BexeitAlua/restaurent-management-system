import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

}
