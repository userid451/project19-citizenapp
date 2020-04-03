import {
    Component,
    OnInit
}                    from '@angular/core';
import {UserService} from '../../../api/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    shadowEmail: string = 'shadow@nomail.com';
    shadowPassword: string = 'shadowPasword00987@4355';
    
    constructor(private userService: UserService) {
    }
    
    ngOnInit() {
    }
    
    loginShadow() {
    
    }
    
}
