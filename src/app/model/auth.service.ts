import { Http } from "@angular/http";
import { Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";
import { RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {

    private baseUrl = "http://localhost:3500/login";
    public authToken: string;

    constructor(private http: Http) { }

    public authenticate(username: string, password: string): Observable<boolean> {

        let myheaders: Headers = new Headers([
            {
                "Content-Type": "application/json"
            }, {
                "Accept": "application/json"
            }
        ]);
        let requestOptions: RequestOptions = new RequestOptions({
            headers: myheaders
        });
        return this.http.post(
            this.baseUrl, { name: username, password: password }, requestOptions)
            .map(response => {
                let responseBody = response.json();
                this.authToken = responseBody.token;
                return responseBody.success;
            });
    }

    public get authenticated(): boolean {

        return this.authToken != null;
    }
}