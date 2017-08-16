import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerComponent } from './banner-inline.component';

describe('BannerComponent (inline template)', () => {
   
   
   let comp: BannerComponent;
   let fixture: ComponentFixture<BannerComponent>;
   let de: DebugElement;
   let el: HTMLElement;
   
   //tests
   it('should display original title', ()=> {
      //esto sirve para 'escuchar' cada cambio, muy útil en producción
      fixture.detectChanges();
      expect(el.textContent).toContain(comp.title);
   });

   it('should display a diferent test title', () => {
      comp.title = 'Test Title';
      fixture.detectChanges();
      expect(el.textContent).toContain('Test Title');
   });

   it('no title in the DOM until manually call detectChanges', () => {
      expect(el.textContent).toEqual('');
   })

   //se configura dentro de un beforeEach para que inicie de nuevo en cada testeo, esto es por JASMINE
   beforeEach(() => {
      //TestBed es la herramienta de prueba más importante de angular, crea un modulo de prueba que permite crear el entorno para la pruevas
      TestBed.configureTestingModule({
         declarations: [BannerComponent], // declara el componente a probar
      });
      // crea una instancia para probarla y la guarda en fixture que es especial para manejar todos estor testeos
      fixture = TestBed.createComponent(BannerComponent);

      comp = fixture.componentInstance; // instancia de prueba de BannerComponent

      //query para el H1 del CSS element selector
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;
   });
});