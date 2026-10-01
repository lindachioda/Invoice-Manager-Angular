import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';
import { Utenti } from './interfaces/utenti';
import { AuthService } from './servicies/auth-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('invoicesapp');

   utente?: Utenti

    constructor(private authService:AuthService){}


   ngOnInit(): void { 
    this.authService.restore()//per il restore in logSignService
     let userSalvato = localStorage.getItem("utente")

     if(userSalvato){
      this.utente = JSON.parse(userSalvato)
     } else{
      console.log("email o password errati")
     }

     localStorage.removeItem('utente')
     localStorage.removeItem('firstname')
   }
}
