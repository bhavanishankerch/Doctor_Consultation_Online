import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public list:any;
  navigate:any;
  vendor:Vendor;

  constructor(private vendorService:VendorServiceService) { 
    this.vendor = new Vendor();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.vendorService.save(this.vendor).subscribe();
  }

}
