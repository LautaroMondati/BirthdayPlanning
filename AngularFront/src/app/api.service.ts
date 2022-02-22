import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./models/user";
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) {}

    addGuest(form: User): Observable<User>{
        return this.http.post<User>( `${env.url}/guests`, form)
    }

    findByInvitationPenging():Observable<User[]> {
        return this.http.get<User[]>(`${env.url}/guests`)
    }

    deleteById(id: number):Observable<User>{
        return this.http.delete<User>(`${env.url}/guests/`+id);
    }

    sendInvitation( ids: number[] ):Observable<User>{
        return this.http.put<User>(`${env.url}/guests/invite`, ids);
    }

    findById( id: number ):Observable<User>{
        return this.http.get<User>(`${env.url}/guests/`+id);
    }

    editGuest( form: User ):Observable<User>{
        console.log(form);
        return this.http.put<User>(`${env.url}/guests/`+form.id, form);
    }
}