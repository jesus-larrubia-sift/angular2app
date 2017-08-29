import { Injectable } from '@angular/core';

/*
 * The @Injectable() decorator is needed when a Service needs dependencies injected to its constructor. Although it is
 * optional when a service doesn't need dependencies injected into it, a common practice is to use the Injectable()
 * decorator for all services for consistency and so that when a service requires dependencies in the future you don't
 * have to worry about remembering to add the decorator.
 */
@Injectable()
export class JwtService {

    getToken(): String {
        return window.localStorage['jwtToken'];
    }

    saveToken(token: String) {
        window.localStorage['jwtToken'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }

}