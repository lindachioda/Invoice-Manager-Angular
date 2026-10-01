import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ComponentService } from '../../servicies/component-service';
import { Utenti } from '../../interfaces/utenti';
import { AuthService } from '../../servicies/auth-service';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup implements OnInit{

  utenti: Utenti[] = []
  formInvalid = false

  constructor(private http:HttpClient, private authSerice:AuthService, private router:Router){}

  getUser():any{
    this.authSerice.getUsers().subscribe(
      res =>{
        this.utenti = res
        console.log(res)
      }
    )
  }

  //aggiungi utente dal form
  addUtente(form:NgForm){
    if(!form.valid){
      this.formInvalid = true
      return
    }

    this.formInvalid = false

    console.log(form.value)
    this.authSerice.addUsers(form.value).subscribe(
      (res)=>{
        this.utenti.push(res)
        form.reset()
        //indirizza all'area clienti
        this.router.navigate(['/login'])
      }
    )
  }

  ngOnInit(): void {
    this.getUser()
  }


}
