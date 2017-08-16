import { Component } from '@angular/core';

@Component({
   selector: 'app-banner',
   template: `
      <h1> {{title}} </h1>
      <input [(ngModel)]='title'>
   `
})

export class BannerComponent {
   title ='Test Tour of Heroes'
}