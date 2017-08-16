import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'calculadora',
   template: `<h1>Calculadora</h1>`
})
export class CalculadoraComponent implements OnInit {
   constructor() { }

   ngOnInit() { }

   suma(n1, n2){
      return n1+n2;
   }
}