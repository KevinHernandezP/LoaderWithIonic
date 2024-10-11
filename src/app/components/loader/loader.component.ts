import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() images: { src: string; text: string }[] = [];
  @Input() interval: number = 3000;
  currentImageIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startLoader();
  }

  startLoader() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, this.interval);
    
    
    setTimeout(() => {
      this.router.navigate(['/profile']);
    }, this.interval * this.images.length + 10); 
  }
}
