import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatActionList, MatListModule } from '@angular/material/list';
import { CartViewComponent } from '../cart-view/cart-view.component';
import { MatButtonModule } from '@angular/material/button';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [CartViewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatButtonModule, 
    MatCardModule
  ]
})
export class CartModule { }
