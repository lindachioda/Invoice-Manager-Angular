import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { ComponentService } from '../../servicies/component-service';
import { CommonModule } from '@angular/common';
import { Customers } from '../../interfaces/customers';
import { Invoices } from '../../interfaces/invoices';

@Component({
  selector: 'app-fatture-form',
  imports: [RouterLink, FormsModule, CommonModule],
templateUrl: './fatture-form.html',
  styleUrl: './fatture-form.scss',
})
export class FattureForm implements OnInit{

  customers:Customers[]= []
  fatture: Invoices[] = []
  //variabile per validare il form con tutti i campi selezionati:
  formInvalid = false

  constructor(private http:HttpClient, private componentService:ComponentService, private router:Router){}

  getCustomer():any{
    this.componentService.getClients().subscribe(
      res => {
        this.customers = res
        console.log(res) 
      }
    )
  }

  //aggiungi fattura dal form
  addFattura(form:NgForm){
    if(!form.valid){
      this.formInvalid = true
      return
    }

    this.formInvalid = false

    console.log(form.value)
    this.componentService.addInvoice(form.value).subscribe(
      (res)=>{
        this.fatture.push(res)
        form.reset()
        //indirizza all'area clienti
        this.router.navigate(['/clienti'])
      }
    )
  }

  ngOnInit(): void {
    this.getCustomer()
  }

}
