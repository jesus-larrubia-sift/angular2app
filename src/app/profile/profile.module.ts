import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule, ProfilesService} from '../shared';

import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './profile-resolver.service';

const profileRouting:ModuleWithProviders = RouterModule.forChild([
    {
        path: 'profile/:username',
        component: ProfileComponent,
        resolve: {
            profile: ProfileResolver
        }
    },
]);

@NgModule({
    imports: [
        profileRouting,
        SharedModule
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [
        ProfileResolver,
        ProfilesService,
    ]
})
export class ProfileModule {
}