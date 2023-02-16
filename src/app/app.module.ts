import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { PropertyDetailResolverService } from './Property/property-detail/property-detail-resolver.service';
import { FilterPipe } from './pipes/filter.pipe';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';




const routes: Routes = [
  {
    path: '',
    component: PropertyListComponent
  },
  {
    path: 'rent-property',
    component: PropertyListComponent
  },
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path: 'property-detail/:id',
    resolve: {prp: PropertyDetailResolverService},
    component: PropertyDetailComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: PropertyListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    SortPipe,

   ],
  imports: [
    CommonModule,
    NgxGalleryModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    PropertyDetailResolverService,
    AuthService,
    AlertifyService,
    UserService,
    HousingService],
    bootstrap: [AppComponent]
})
export class AppModule { }
