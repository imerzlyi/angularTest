import { Component } from '@angular/core';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(private userSevice: UserService) { }

  onAdd(name: string, status: string) {
    this.userSevice.createUser(name, status);
  }
}
