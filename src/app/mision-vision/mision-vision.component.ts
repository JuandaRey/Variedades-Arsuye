import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; // Importa Title
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.css'
})
export class MisionVisionComponent implements OnInit {

  constructor(private titleService: Title) { } // Inyecta Title

  ngOnInit(): void {
    this.titleService.setTitle('Misión y Visión'); 
  }
}