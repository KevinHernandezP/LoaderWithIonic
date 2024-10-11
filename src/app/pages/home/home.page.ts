import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loaderImages = [
    { src: 'assets/animal3.jpg', text: 'Cargando, por favor espera...' },
    { src: 'assets/animal2.jpg', text: 'Estamos preparando algo especial...' },
    { src: 'assets/animal1.png', text: 'Esto tomará solo un momento...' }
  ];

  showLoader: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.loading$.subscribe(isLoading => {
      this.showLoader = isLoading;
    });
  }

  toggleLoader() {
    this.loaderService.show();
  }
}
