import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';
import { EditorModule } from './editor/editor.module';
import {
  ApiService,
  AuthGuard,
  FooterComponent,
  HeaderComponent,
  JwtService,
  SharedModule,
  UserService,
  ArticlesService,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  // Importing BrowserModule made all of its public components,directives,
  // and pipes visible to the component templates in AppModule.
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    HomeModule,
    SettingsModule,
    rootRouting,
    ProfileModule,
    EditorModule,
  ],
  // Services used.
  providers: [
    ApiService,
    JwtService,
    UserService,
    AuthGuard,
    ArticlesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
