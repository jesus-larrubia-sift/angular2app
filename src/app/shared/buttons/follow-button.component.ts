import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { ProfilesService, UserService } from '../services';
import { Profile } from '../models';

@Component({
    selector: 'follow-button',
    templateUrl: './follow-button.component.html'
})

export class FollowButtonComponent {

    constructor(
        private profilesService: ProfilesService,
        private router: Router,
        private userService: UserService
    ) {}

    @Input() profile: Profile;
    @Output() onToggle = new EventEmitter<boolean>();
    isSubmitting = false;


    toggleFollowing() {
        this.isSubmitting = true;

        this.userService.isAuthenticated.subscribe(
            (authenticated) => {
                // Not authenticated? Push to login screen
                if (!authenticated) {
                    this.router.navigateByUrl('/login');
                    return;
                }

                // Follow this profile if we aren't already
                if (!this.profile.following) {
                    this.profilesService.follow(this.profile.username)
                        .subscribe(
                            data => {
                                this.isSubmitting = false;
                                this.onToggle.emit(true);
                            },
                            err => this.isSubmitting = false
                        );

                    // Otherwise, unfollow this profile
                } else {
                    this.profilesService.unfollow(this.profile.username)
                        .subscribe(
                            data => {
                                this.isSubmitting = false;
                                this.onToggle.emit(false);
                            },
                            err => this.isSubmitting = false
                        );
                }

            }
        )
    }
}