import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { Casestudy1Component } from './casestudy1/casestudy1.component';
import { Casestudy2Component } from './casestudy2/casestudy2.component';
import { Casestudy3Component } from './casestudy3/casestudy3.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'casestudy1', component: Casestudy1Component },
  { path: 'casestudy2', component: Casestudy2Component },
  { path: 'casestudy3', component: Casestudy3Component },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  { path: '**', component: IndexComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Casestudy1Component,
    Casestudy2Component,
    Casestudy3Component,
    ContactComponent,
    IndexComponent,
    ProductComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FontAwesomeModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
