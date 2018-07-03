import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map, filter, tap, startWith, debounceTime } from 'rxjs/operators';
import { Tweet } from '../models/Tweet';
import { User } from '../models/User';
import { ServerDTO, serverDTOToTweets, serverDTOToUsers } from '../models/serverDTO';

@Injectable()
export class TweetsService {

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    getTweet(): Observable<Tweet> {
        return this.route.paramMap.pipe(
            debounceTime(100),
            filter(params => params.has('tweetID')),
            map(params => params.get('tweetID')),
            switchMap(userID => this.http.get<ServerDTO>('http://localhost:8080/tweet/' + userID)),
            map(dto => serverDTOToTweets(dto)[0])
        );
    }

    getTweets(): Observable<Tweet[]> {
        return merge(this.route.url, this.route.queryParamMap).pipe(
            debounceTime(100),
            switchMap(x => this.http.get<ServerDTO>('http://localhost:8080' + this.router.url)),
            map(x => serverDTOToTweets(x)),
            tap(console.log),
            startWith([])
        );
    }

    postTweet(message: string, replyToID: number) {

        if (replyToID === 0 ) {
          this.http.post(
              'http://localhost:8080/tweet/',
              JSON.stringify(message),
              {headers: {'Content-Type': 'application/json'}}
            ).subscribe(_ => _);
        } else {
          this.http.post(
              'http://localhost:8080/tweet/' + replyToID,
              JSON.stringify(message),
              {headers: {'Content-Type': 'application/json'}}
            ).subscribe(_ => _);
        }

    }

    likeTweet(tweetID: string) {
        return this.http.post('http://localhost:8080/tweet/' + tweetID + '/like', {});
    }

    unlikeTweet(tweetID: string) {
        return this.http.delete('http://localhost:8080/tweet/' + tweetID + '/like');
    }

    navigateToTweet(tweetID: string) {
        this.router.navigate(['tweet', tweetID, 'replies']);
    }
}
