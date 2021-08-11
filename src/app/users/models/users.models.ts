export class UsersModels {
  id?: number;
  name: string;
  username: string;
  age: string;

  constructor( name: string, username: string, age: string ) {
    this.name = name;
    this.username = username;
    this.age = age;
  }
}
