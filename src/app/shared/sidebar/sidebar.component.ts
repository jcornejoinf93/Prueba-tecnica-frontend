import { Component, OnInit } from '@angular/core';

interface MenuModels {
  name: string;
  url: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuModels[] = [
    { name: 'Home', url: '/users/home' },
    { name: 'Usuarios', url: '/users/listar-usuarios' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
