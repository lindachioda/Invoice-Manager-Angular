import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  firstname:string=''

  //firstname login
  ngOnInit(): void {
    this.firstname= localStorage.getItem('firstname') || '' //può essere nullo
  }


}
