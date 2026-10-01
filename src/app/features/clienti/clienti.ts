import { Component, OnInit } from '@angular/core';
import { DetailClienti } from '../detail-clienti/detail-clienti';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ComponentService } from '../../servicies/component-service';
import { Customers } from '../../interfaces/customers';
import { Invoices } from '../../interfaces/invoices';

@Component({
  selector: 'app-clienti',
  imports: [DetailClienti, CommonModule],
  templateUrl: './clienti.html',
  styleUrl: './clienti.scss',
})
export class Clienti implements OnInit{

  fatture: Invoices[]=[]
  customers:Customers[]= []
  clienti?:Customers
  invoices?:Invoices
   

  constructor(private http:HttpClient, private componentService:ComponentService){}

  getCustomers():any{
    this.componentService.getClients().subscribe(
      res => {
        this.customers = res
        console.log(res)
      }
    )
  }

  ngOnInit(): void {
    this.getCustomers()
  }

  clickUser(cliente:Customers){
    this.clienti = cliente
  }


}


