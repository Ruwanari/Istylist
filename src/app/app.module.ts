import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NavbarComponent,
    HeroDetailComponent,
    HomepageComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path:'admin',
          component: AdminComponent
        },
        {
          path:"",
          component: HomeComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
