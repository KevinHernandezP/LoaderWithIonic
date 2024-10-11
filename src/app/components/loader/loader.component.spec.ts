import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let routerSpy: { navigate: jasmine.Spy };

  beforeEach(async () => {
    routerSpy = { navigate: jasmine.createSpy('navigate') };

    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start loader and redirect after images have shown', (done) => {
    component.images = [
      { src: 'assets/animal3.jpg', text: 'Cargando, por favor espera...' },
      { src: 'assets/animal2.jpg', text: 'Estamos preparando algo especial...' }
    ];
    component.interval = 1000;

    component.startLoader();

    setTimeout(() => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/profile']);
      done();
    }, 3000);
  });
});
