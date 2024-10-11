import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loaderImages = [
    { src: 'assets/animal3.jpg', text: 'Cargando, por favor espera...' },
    { src: 'assets/animal2.jpg', text: 'Estamos preparando algo especial...' },
    { src: 'assets/animal1.png', text: 'Esto tomará solo un momento...' }
  ];

  showLoader: boolean = false;

  toggleLoader() {
    this.showLoader = !this.showLoader;
  }
}
