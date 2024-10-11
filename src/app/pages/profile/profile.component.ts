import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../loader.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private loaderService: LoaderService) {}

  ngOnInit() {}

  goHome() {
    this.loaderService.hide(); // Detener el loader
    this.router.navigate(['/home']); 
  }
}
