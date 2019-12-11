import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';
import { CounterService } from '../counter-service.service';

@Component({
  selector: 'app-unactive-users',
  templateUrl: './unactive-users.component.html',
  styleUrls: ['../app.component.css']
})
export class UnactiveUsersComponent implements OnInit {
  users: User[] = [];
  selectedUser: User;

  constructor(private userSevice: UserService, private counterService: CounterService) { }

  ngOnInit() {
    this.users = this.userSevice.inactiveUsers;
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  setToActive() {
    if (this.selectedUser != null) {
      this.userSevice.setToActive(this.selectedUser);
      this.counterService.increment();
      this.selectedUser = null;
    }
  }
}
