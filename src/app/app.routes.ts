import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DepartmentComponent } from './department/department.component';
import { contentChild } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'department',component:DepartmentComponent},
    {path:'contact',component:ContactComponent}
];
