import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { UsersModels } from '../../models/users.models';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit, OnChanges {

  @Input() userForEdit: UsersModels;
  @Output() fillTable = new EventEmitter();

  usersForms: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    age: ['', [Validators.required]],

  });

  constructor( private fb: FormBuilder,
               private userService: UsersService,
               private toastr: ToastrService ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userForEdit) {
      this.usersForms.patchValue({
        name: this.userForEdit.name,
        username: this.userForEdit.username,
        age: this.userForEdit.age
      });
    }
  }

  ngOnInit(): void {
  }

  invalidField(campo: string) {
    return this.usersForms.get(campo).invalid && this.usersForms.get(campo).touched;
  }

  addUsers() {

    if (this.usersForms.invalid) {
      return;
    }

    this.userService.postUsers(this.usersForms.value).subscribe(resp => {
      // console.log(resp);
      this.toastr.success('Usuario agregado', 'Acción exitosa!');
      this.fillTable.emit(resp);
      this.cleanForm();
    },
    error => {
      // console.log(error);
      this.toastr.error('Usuario no agregado', 'Acción fallida!');
    });
  }

  cleanForm() {
    this.usersForms.reset();
    this.userForEdit = null;
  }

  updateUsers() {
    this.userService.putUsers(this.userForEdit.id, this.usersForms.value).subscribe(resp => {
      // console.log(resp);
      this.toastr.success('Usuario modificado', 'Acción exitosa!');
      this.fillTable.emit(resp);
      this.cleanForm();
    },
    error => {
      // console.log(error);
      this.toastr.error('Usuario no modificado', 'Acción fallida!');

    });
  }

}
