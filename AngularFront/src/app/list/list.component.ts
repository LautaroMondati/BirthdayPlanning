import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ApiService } from '../api.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  guests: Array<User> = [];

  done : Array<any> = [];

  ids : Array<number> = [];

  constructor(private api: ApiService, public router: Router) { }
  
  add() {
    this.router.navigateByUrl('addGuest')
  }

  invite() {
    this.done.forEach(element => this.ids.push(element.id));
    this.api.sendInvitation(this.ids).subscribe(data => {
      this.ids = [];
      this.done = [];
      this.router.navigateByUrl('home')
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  };
   getGuest(){
     this.api.findByInvitationPenging().subscribe( guests => {
       this.guests = guests;
     });
   }
  ngOnInit(): void {
    this.getGuest();
}}