import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { UsuarioModel } from "../models/UsuarioModel";


@Injectable({ providedIn: 'root' })
export class UserService {

    URL_SUPABASE = 'https://ozrblmbxawabpvfoabip.supabase.co/rest/v1/usuario'


    constructor(private _httpclient: HttpClient) {

    }

    headers =new HttpHeaders({'apiKey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cmJsbWJ4YXdhYnB2Zm9hYmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0MDA4MDQsImV4cCI6MjAxMjk3NjgwNH0.fJXWBONj30_1hmShqQg13ydzPnDIthmIS72NZWqUktU'});

    supabaseheaders = new HttpHeaders()
        .set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cmJsbWJ4YXdhYnB2Zm9hYmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0MDA4MDQsImV4cCI6MjAxMjk3NjgwNH0.fJXWBONj30_1hmShqQg13ydzPnDIthmIS72NZWqUktU')

//   getUserListSupaBase(): Observable<UserModel[]> {
//       console.log(this.supabaseheaders);
//       return this._httpclient.get<UserModel[]>(this.URL_SUPABASE, { headers: this.supabaseheaders, responseType: 'json' });
//    }

// getUser(user_id: string): Observable<UserModel>{
//      return this._httpclient.get<UserModel>(this.URL_SUPABASE+'?user_id=eq.'+user_id,{ headers: this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'), responseType: 'json' });
//   }

    getLoginUser(username: string, password: string): Observable<UsuarioModel[]>{
        return this._httpclient.get<UsuarioModel[]>(this.URL_SUPABASE+'?nombre_usuario=eq.'+username+'&pass=eq.'+password,{ headers: this.headers});
    }   
    
}