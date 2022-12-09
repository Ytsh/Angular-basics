import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { SpecialDirective } from './components/directives/special.directive';
import { DirectiveComponent } from './directive/directive.component';
import { CardsWrapperComponent } from './forms/cards-wrapper/cards-wrapper.component';
import { TableComponent } from './components/table/table.component';
// import {MatTableDataSource} from '@angular/material/table';
// import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SpecialDirective,
    DirectiveComponent,
    CardsWrapperComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    // MatTableDataSource,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
