import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../servicies/component-service';
import { CommonModule } from '@angular/common';
import { Utenti } from '../../interfaces/utenti';
import { AuthService } from '../../servicies/auth-service';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit{

  utenti: Utenti[] = []

  constructor(private authService:AuthService){}

  getUser():any{
    this.authService.getUsers().subscribe(
      res =>{
        this.utenti = res
        console.log(res)
      }
    )
  }

  ngOnInit(): void {
    this.getUser()
  }

}
