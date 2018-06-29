import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Tweet } from '../models/Tweet';
import { User } from '../models/User';
import { ServerDTO, serverDTOToTweets, serverDTOToUsers } from '../models/serverDTO';

@Injectable()
export class TweetsService {

    tweets: Observable<Tweet[]>;
    users: Observable<User[]>;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router
    ) {
        const data = merge(this.route.url, this.route.params).pipe(
            switchMap(x => this.http.get<ServerDTO>('http://localhost:8080' + this.router.url))
        );
        this.tweets = data.pipe(
            map(x => serverDTOToTweets(x))
        );
        this.users = data.pipe(
            map(x => serverDTOToUsers(x))
        );

        this.tweets.subscribe(x => console.log('tweets: ', x));
        this.users.subscribe(x => console.log('users: ', x));
    }



}
