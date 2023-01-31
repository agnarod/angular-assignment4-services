import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService,CounterService]
})
export class AppComponent {
  constructor(private userService: UserService) { }


}
