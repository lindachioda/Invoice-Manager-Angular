import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utenti } from '../interfaces/utenti';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

  utenti: Utenti[] = []
  private isLogin = false
  private APIusers = `${environment.apiUrl}/users`

   constructor(private http:HttpClient, private router:Router){}

  getUsers():Observable<Utenti[]>{
      return this.http.get<Utenti[]>(this.APIusers)
    }

  //aggiungi utente
  addUsers(utente:Utenti):Observable<Utenti>{
    return this.http.post<Utenti>(this.APIusers, utente)
  }

  isLoggedIn(): boolean {
  return this.getLogin() || localStorage.getItem("utente") !== null
}

  getLogin(){ // authguard
    return this.isLogin 
  }

  setLogin(utente: Utenti){ //attiva login
        this.isLogin = true
        localStorage.setItem("utente", JSON.stringify(utente));
 }

 setLogout():any{
    this.isLogin = false
    localStorage.removeItem('utente')
    localStorage.removeItem('firstname')
    //mi reinderizzo al login
    this.router.navigate(['/login'])
  }

 restore() {//per localstorage
    let utente = localStorage.getItem("utente")
       if(utente) {
        this.isLogin = true
      }else {
        this.isLogin = false
      }
    }
  
}
