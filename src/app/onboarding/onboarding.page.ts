import {
    Component,
    OnInit
}                    from '@angular/core';
import {Router}      from '@angular/router';
import {UserService} from '../api/user.service';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.page.html',
    styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
    
    shadowEmail: string    = 'shadow@nomail.com';
    shadowPassword: string = 'shadowPasword00987@4355';
    
    constructor(private userService: UserService, private router: Router) {
    }
    
    ngOnInit() {
    }
    
    register() {
        this.userService.startUpCompleted().then(() => {
            this.router.navigate(['/register']);
        });
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
            } else {
                this.userService.authenticate(this.shadowEmail, this.shadowPassword).then((result) => {
                    if (!result) {
                        this.router.navigate(['/home']);
                    } else {
                        this.router.navigate(['/login']);
                    }
                });
            }
            
        });
        
    }
    
}
