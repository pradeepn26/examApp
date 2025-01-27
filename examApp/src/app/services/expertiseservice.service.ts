import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpertiseserviceService {

  _httpclient: HttpClient;
  postDetails:any;
  contactDetails:any;
  getContactDetails:any;

  constructor(_httpRef:HttpClient) {
    this._httpclient = _httpRef;
   }

   getPostData() {
    this._httpclient.get("https://exampradeep2560.azurewebsites.net/api/Expertises/").subscribe(results => {    
      this.postDetails = results;
      console.log(this.postDetails);
    });
  }

  addContacts(id:any, data:any){
    var data:any = {
      name : id,
      emailId: data
    }
    this._httpclient.post("https://exampradeep2560.azurewebsites.net/api/Contacts/",data).subscribe(results => {
      this.contactDetails = results;
      console.log(this.contactDetails);
    });
  }

  getContactsData() {
    this._httpclient.get("https://exampradeep2560.azurewebsites.net/api/Contacts/").subscribe(results => {    
      this.getContactDetails = results;
      console.log(this.getContactDetails);
    });
  }

}
