import {
  Component,
  Input,
  OnInit
}                    from '@angular/core';
import {UserService} from '../../api/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string;
  user: any = {name: ''};
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getAuthenticatedUser().then((user: string) => {
      if (user) {
        this.user = JSON.parse(user);
        console.log(this.user)
      }
    });
  }

}
