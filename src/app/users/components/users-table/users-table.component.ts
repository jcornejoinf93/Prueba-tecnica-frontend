import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { UsersModels } from '../../models/users.models';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  userForEdit: UsersModels;
  users: UsersModels[] = [];

  constructor( private userService: UsersService,
               private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getusers().subscribe((resp: any) => {
      this.users = resp;
    });
  }

  removeUsers(user: UsersModels) {

    Swal.fire({
      title: 'Estás seguro?',
      text: 'Se eliminará el usuario de nuestra base de datos',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'NO',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SÍ'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUsers(user.id).subscribe(resp => {
          this.getUsers();
          this.toastr.success('Usuario eliminado', 'Acción exitosa!');
        },
        error => {
          // console.log(error);
          this.toastr.error('Usuario no eliminado', 'Acción fallida!');
        });
      }
    });
  }

  transmitData(users: UsersModels) {
    this.userForEdit = users;
  }

  receibeData(event) {
    this.getUsers();
  }

}
