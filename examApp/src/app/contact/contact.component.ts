import { Component } from '@angular/core';
import { ExpertiseserviceService } from '../services/expertiseservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name:any;
  email:any;
  _exptDataServ:ExpertiseserviceService ;
    constructor(_expertdataServiceRef : ExpertiseserviceService) {
      this._exptDataServ = _expertdataServiceRef;      
    } 
  postData(){
    this._exptDataServ.addContacts(this.name,this.email);
  }
}
