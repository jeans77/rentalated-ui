import { Component, OnInit } from '@angular/core';
import { Apartment } from "../apartment";
import { SessionDataService } from "../session-data/session-data.service";
import { ApartmentDataService } from "../apartment-data/apartment-data.service";

@Component({
  selector: 'app-mylisting',
  templateUrl: './mylisting.component.html',
  styleUrls: ['./mylisting.component.css']
})
export class MylistingComponent implements OnInit {
//  status: string;
//  display: string;
//  private active = "Deactivate";
//  private inactive = "Activate";
  apartments: Apartment[];
  error: string;
  // message:              string;
  selectedMyApartment: Apartment;
  // user:                   User;


  constructor(private service: SessionDataService,
    private data: ApartmentDataService) { }



  selectApartments(active: boolean) {
    //              return this.apartments
    //               .filter(apartment => apartment.is_active === active);

    const arr = [];

    if (this.apartments) {
      for (let apt of this.apartments) {
        if (apt.is_active === active) {
          arr.push(apt);
        }
      }
    }
    return arr;
  }

  showDetails(apartment: Apartment) {
    this.selectedMyApartment = apartment;
 //   this.updateButtonText();
  }

  hideStuff() {
    this.selectedMyApartment = null;
  }

status() {
  let status = "Activate"
  if(this.selectedMyApartment.is_active)
    status = "Deactivate"
  return status;
}

  changeStatus() {
    this.selectedMyApartment.is_active = !this.selectedMyApartment.is_active;
 //   this.updateButtonText();

    this.data.changeStatus(this.selectedMyApartment)
      .subscribe(apartment => this.selectedMyApartment.is_active = apartment.is_active);
  }

//  updateButtonText() {
//    if (this.selectedMyApartment.is_active) {
//      this.display = this.active;
//    } else {
 //     this.display = this.inactive;
 //   }
 // }

  ngOnInit() {


    this.data
      .getMyListings()
      .subscribe(
      apartments => this.apartments = apartments,
      () => this.error = 'Could not load apartment data'
      );
  }

}

