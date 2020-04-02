import {Injectable}      from '@angular/core';
import {Storage}         from '@ionic/storage';
import {BehaviorSubject, throwError} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    userPrefix: string        = 'User';
    
    constructor(private storage: Storage) {
    }
    
    public saveUser(user: any): any {
        try {
            this.storage.set(`${this.userPrefix}:${user.id}`, JSON.stringify(user));
        } catch (e) {
            throw e;
        }
    }
    
    public getUser(userId: string): any {
        let user;
        
        this.storage.forEach((value, key) => {
            if (key === `${this.userPrefix}:${userId}`) {
                user = JSON.stringify(value);
            }
        }).then(() => {
            if (user) {
                const observable = new BehaviorSubject<any>({});
                observable.next(user);
            }
            else {
                return throwError(new Error('no user found'));
            }
            
        });
    }
}
