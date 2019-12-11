import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers: User[] = [
    {name:"User1", status:"Status1"},
    {name:"User2", status:"Status2"}
  ];

  inactiveUsers: User[] = [
    {name:"User3", status:"Status3"},
    {name:"User4", status:"Status4"}
  ];

  constructor() { }

  setToInactive(user: User) {
    this.inactiveUsers.push(user);
    let index = this.activeUsers.indexOf(user);
    if (index > -1) {
      this.activeUsers.splice(index, 1);
    }
  }

  setToActive(user: User) {
    this.activeUsers.push(user);
    let index = this.inactiveUsers.indexOf(user);
    if (index > -1) {
      this.inactiveUsers.splice(index, 1);
    }
  }
  
  createUser(name: string, status: string) {
    this.activeUsers.push(new User(name, status))
  }
}
