import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routingModule, routingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { RouterModule } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddGuestComponent,
    GuestComponent  ],
  imports: [
    BrowserModule,
    routingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule  
  ],
  providers: [routingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
