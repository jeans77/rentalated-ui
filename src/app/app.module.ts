import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ApartmentListingsComponent } from './apartment-listings/apartment-listings.component';

import { ApartmentDataService } from './apartment-data/apartment-data.service';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ApartmentListingsComponent,
    ApartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ ApartmentDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
