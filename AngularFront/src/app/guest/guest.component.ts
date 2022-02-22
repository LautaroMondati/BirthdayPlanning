import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  id: number;
  @Input() guest: User;
  @Output() idToDelete = new EventEmitter();
  constructor(private api: ApiService, public router: Router) {}

  delete(id: number){
  this.id = id;
    Swal.fire({
      title: 'Delete user?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Confirm',
    }).then((result)=>{
      if(result.isConfirmed){
        this.api.deleteById(this.id).subscribe(data => {
          this.idToDelete.emit();
        });
      }
    })
  }

  edit(id: number) {
    this.router.navigate(['/addGuest', id]);
  }

  ngOnInit(): void {
  }

  

}
