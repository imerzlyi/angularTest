import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';
import { CounterService } from '../counter-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['../app.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: User[] = [];
  selectedUser: User;

  constructor(private userSevice: UserService, private counterService: CounterService) { }

  ngOnInit() {
    this.users = this.userSevice.activeUsers;
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  setToInactive() {
    if (this.selectedUser != null)
    {
      this.userSevice.setToInactive(this.selectedUser);
      this.counterService.increment();
      this.selectedUser = null;
    }
  }
}
