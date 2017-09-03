import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule, AuthGuard} from '../shared';

import {SettingsComponent} from './settings.component';

const settingsRouting:ModuleWithProviders = RouterModule.forChild([
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard]
    },
]);

@NgModule({
    imports: [
        settingsRouting,
        SharedModule
    ],
    declarations: [
        SettingsComponent
    ],

    providers: [AuthGuard]
})
export class SettingsModule {
}