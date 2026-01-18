import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; // Bootstrap Modal
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterModule, NgbModalModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  galleryImages: string[] = [
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
    'OIP3.jpg',
  ];

  // Selected image for modal
  selectedImage: string = '';

  openLightbox(image: string) {
    this.selectedImage = image;
  }
}
