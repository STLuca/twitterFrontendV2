import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map, filter, startWith, tap, debounceTime } from 'rxjs/operators';
import { Tweet } from '../models/Tweet';
import { User, userDTOToUser } from '../models/User';
import { ServerDTO, serverDTOToTweets, serverDTOToUsers } from '../models/serverDTO';
import { UserDTO } from '../models/UserDTO';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    getUser(): Observable<User> {
        return this.route.paramMap.pipe(
            debounceTime(100),
            filter(params => params.has('userID')),
            map(params => params.get('userID')),
            switchMap(userID => this.http.get<UserDTO>('http://localhost:8080/user/' + userID)),
            map(userDTO => userDTOToUser(userDTO))
        );
    }

    getUsers(): Observable<User[]> {
        return merge(this.route.url, this.route.queryParamMap).pipe(
            debounceTime(100),
            switchMap(_ => this.http.get<ServerDTO>('http://localhost:8080' + this.router.url)),
            map(x => x.tweets.length ? [] : serverDTOToUsers(x)),
            tap(console.log),
            startWith([])
        );
    }

    getSearchedUsers(): Observable<User[]> {
        return this.route.paramMap.pipe(
            filter(params => params.has('username')),
            map(params => params.get('username')),
            switchMap(userID => this.http.get<ServerDTO>('http://localhost:8080/user/search/' + userID)),
            map(dto => serverDTOToUsers(dto))
        );
    }

    getSearchedUsername(): Observable<string> {
        return this.route.paramMap.pipe(
            filter(params => params.has('username')),
            map(params => params.get('username'))
        );
    }

    searchForUser(username: string) {
        this.router.navigate(['user', 'search', username]);
    }

    registerUser(user) {
        return this.http.post('http://localhost:8080/user/register', user)
            .subscribe(_ => this.router.navigate(['login']));
    }

    followUser(username: string) {
        return this.http.post('http://localhost:8080/user/' + username + '/follows/follow', {});
    }

    unfollowUser(username: string) {
        return this.http.delete('http://localhost:8080/user/' + username + '/follows/follow', {});
    }

    navigateToUser(username: string) {
        this.router.navigate(['user', username]);
    }

    navigateToUserFollowing(username: string) {
        this.router.navigate(['user', username, 'follows', 'following', 'new']);
    }

    navigateToUserFollowers(username: string) {
        this.router.navigate(['user', username, 'follows', 'followers', 'new']);
    }

}
