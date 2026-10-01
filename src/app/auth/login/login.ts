import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../servicies/auth-service';
import { Utenti } from '../../interfaces/utenti';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  utenti: Utenti[] = []
  utente!: Utenti
  message:string =''
  error:string=''

  constructor(private http:HttpClient, private authService:AuthService, private router:Router){}

  onSubmitLogin(form:NgForm){
    let datiUtenti = form.value
    console.log(datiUtenti)

    this.authService.getUsers().subscribe((res)=>{
      let utente = res.find((utente)=>
        utente.email === datiUtenti.email &&
        utente.password === datiUtenti.password
      )

      if(utente){
        this.message = `Welcome ${utente.firstname}`
        //salva in local storage il nome che apparirà in home
        localStorage.setItem('firstname', utente.firstname)

        this.authService.setLogin(utente) //salva in storage
        
        this.router.navigate(['/home'])
      }else{
        this.error = 'Email o password errati'
      }
    })
  }

}
