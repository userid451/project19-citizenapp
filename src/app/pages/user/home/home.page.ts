import {
    Component,
    OnInit
}                    from '@angular/core';
import {UserService} from '../../../api/user.service';
import {Router}      from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    shadowEmail: string = 'shadow@nomail.com';
    shadowPassword: string = 'shadowPasword00987@4355';
    
    constructor(private userService: UserService,
                private router: Router) {
    }
    
    ngOnInit() {
    }
    
    createShadowUser() {
        this.userService.getUserByEmail(this.shadowEmail).then((data) => {
            if (!data) {
                this.userService.createShadowUser().then(() => {
                    this.userService.authenticate(this.shadowEmail, this.shadowPassword).then((user) => {
                        if (user) {
                            this.router.navigate(['/home']);
                        }
                    });
                });
            }
            else {
                this.userService.authenticate(this.shadowEmail, this.shadowPassword).then((result) => {
                    if (!result) {
                        this.router.navigate(['/home']);
                    }
                    else {
                        this.router.navigate(['/login']);
                    }
                })
            }
            
        });
        
    }
    
    
}
