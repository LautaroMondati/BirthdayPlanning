import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  id: number;
  user: User;
  constructor(public router: Router, private api: ApiService, private actRoute: ActivatedRoute) {
  }

  back() {
    this.router.navigateByUrl('home')
  }
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    if(this.id){
      this.getUser();
    }
  }
  onSubmit(data: any){
    console.log(data.form.value);
    if(this.id){
      this.api.editGuest(data.form.value).subscribe(data => {
        this.router.navigateByUrl('home')
      })
    }else{
      this.api.addGuest(data.form.value).subscribe(data => {
        this.router.navigateByUrl('home')
      });
    }
  }

  getUser(){
    this.api.findById(this.id).subscribe(data => {
      this.user = new User(data.id, data.firstName,data.lastName, data.email, data.invitationSent);
    });
  }
  
}
