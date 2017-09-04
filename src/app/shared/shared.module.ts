import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './errors/list-errors.component';
import { FollowButtonComponent } from './buttons/follow-button.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    FollowButtonComponent,
   ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    FollowButtonComponent,
  ]
})
export class SharedModule {}
