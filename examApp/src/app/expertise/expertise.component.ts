import { Component } from '@angular/core';
import { ExpertiseserviceService } from '../services/expertiseservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-expertise',
  imports: [NgFor],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {
  _exptDataServ:ExpertiseserviceService ;
  constructor(_expertdataServiceRef : ExpertiseserviceService) {
    this._exptDataServ = _expertdataServiceRef;
    this._exptDataServ.getPostData();
  } 
}
