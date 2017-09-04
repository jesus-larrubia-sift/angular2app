import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Article, ArticlesService } from '../shared';

@Injectable()
export class EditableArticleResolver implements Resolve<Article> {
    constructor(
        private articlesService: ArticlesService,
        private router: Router
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {

        return this.articlesService.get(route.params['slug'])
            .catch((err) => this.router.navigateByUrl('/'));

    }
}