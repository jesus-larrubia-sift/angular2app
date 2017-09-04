import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule, ArticlesService, AuthGuard} from '../shared';

import { EditorComponent } from './editor.component';
import { EditableArticleResolver } from './editable-article-resolver.service';

const editorRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'editor',
        component: EditorComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'editor/:slug',
        component: EditorComponent,
        canActivate: [AuthGuard],
        resolve: {
            article: EditableArticleResolver
        }
    }
]);

@NgModule({
    imports: [
        editorRouting,
        SharedModule
    ],
    declarations: [
        EditorComponent
    ],
    providers: [
        EditableArticleResolver,
        ArticlesService,
    ]
})
export class EditorModule {
}