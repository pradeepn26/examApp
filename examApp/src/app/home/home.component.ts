import { Component } from '@angular/core';
import { ExpertiseserviceService } from '../services/expertiseservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
_exptDataServ:ExpertiseserviceService ;
  constructor(_expertdataServiceRef : ExpertiseserviceService) {
    this._exptDataServ = _expertdataServiceRef;
    this._exptDataServ.getContactsData();
  }
}
