import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'addGuest', component: AddGuestComponent },
  {path: 'addGuest/:id', component: AddGuestComponent},
  { path: '**', component: ListComponent }
];
export const routingProviders: Array<any> = [];
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);