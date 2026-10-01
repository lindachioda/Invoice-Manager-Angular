import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../servicies/auth-service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

  constructor(public authService:AuthService){}

  clickFooter(){
    document.getElementById('footer')?.scrollIntoView()
  }

}
