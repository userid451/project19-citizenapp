import {Injectable} from '@angular/core';
import {Storage}    from '@ionic/storage';
import * as uuid    from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userPrefix: string     = 'User';
    userAuthPrefix: string = 'Auth';
    
    constructor(private storage: Storage) {
        // this.storage.clear();
    }
    
    public saveUser(user: any): any {
        try {
            return this.storage.set(`${this.userPrefix}:${user.id}`, JSON.stringify(user));
        } catch (e) {
            throw e;
        }
    }
    
    public getUserByEmail(email: string): any {
        let user;
        
        return new Promise((resolve) => {
            this.storage.forEach((value: string, key: string) => {
                
                const record: any = JSON.parse(value);
                if (record.email === email) {
                    user = record;
                }
                
            }).then(() => {
                resolve(user);
                // Todo reject with error
            });
        });
    }
    
    public getUserById(userId: string): any {
        return this.storage.get(`${this.userPrefix}:${userId}`);
    }
    
    public authenticate(email: string, password: string) {
        return new Promise((resolve) => {
            let user;
            this.getUserByEmail(email).then((data: any) => {
                if (data && password == data.password) {
                    user = data;
                    this.saveAuthenticatedUser(user).then(() => {
                        resolve(user);
                    });
                } else {
                    resolve(user);
                }
            });
        });
    }
    
    public createShadowUser() {
        return new Promise((resolve) => {
            const name        = 'anonymous';
            const phoneNumber = '1234455';
            const email       = 'shadow@nomail.com';
            const password    = 'shadowPasword00987@4355';
            const id          = uuid.v4();
            this.saveUser({name, phoneNumber, email, password, id}).then(() => {
                resolve();
            });
        });
    }
    
    public saveAuthenticatedUser(user): any {
        try {
            return this.storage.set(this.userAuthPrefix, JSON.stringify(user));
        } catch (e) {
            throw e;
        }
    }
    
    public getAuthenticatedUser(): any {
        return this.storage.get(this.userAuthPrefix);
    }
    
    public startUpCompleted(): any {
        return this.storage.set('StartedUpCompleted', 'true');
    }
    
    public isStartupCompleted(): any {
        return this.storage.get('StartedUpCompleted');
    }
}
