import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

//  material modules
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
   // declarations: [],--->not needed for manual module
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatChipsModule,   
    MatAutocompleteModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
