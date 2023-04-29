import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-cataloguescreen',
  templateUrl: './cataloguescreen.component.html',
  styleUrls: ['./cataloguescreen.component.css']
})
export class CataloguescreenComponent implements OnInit {

  public list:any;
  navigate:any;
  vendor:Vendor;

  constructor(private vendorService:VendorServiceService) {
    this.vendor = new Vendor();
   }

  ngOnInit(): void {
    this.vendorService.getAll().subscribe(res => {this.list = res;})
  }

}
