import { TestBed, async } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent',() => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            CalculadoraComponent
         ]
      }).compileComponents();
   }));
   
   it('a ver si suma', async(()=>{
      const fixture = TestBed.createComponent(CalculadoraComponent);
      const calc = fixture.debugElement.componentInstance;
      expect(calc.suma(2,2)).toEqual(4);
   }))
});

