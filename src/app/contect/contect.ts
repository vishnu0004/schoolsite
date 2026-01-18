import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contect',
  imports: [CommonModule, FormsModule],
  templateUrl: './contect.html',
  styleUrl: './contect.css',
})
export class Contect {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log(this.contact);
    alert('Thank you for contacting us!');
    this.contact = { name: '', email: '', message: '' };
  }

}
