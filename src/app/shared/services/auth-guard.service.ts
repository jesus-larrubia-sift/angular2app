import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {UserService} from './user.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        // i.e. if isAuthenticated is false, then set canActivate to true
        return this.userService.isAuthenticated.take(1).map(bool => bool);
    }
}