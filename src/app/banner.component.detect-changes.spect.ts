import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { TestBed } from "@angular/core/testing";
import { BannerComponent } from './banner-inline.component';

TestBed.configureTestingModule({
   declarations: [ BannerComponent ],
   providers: [
      {provide: ComponentFixtureAutoDetect, useValue: true}
   ]
})

