import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Customers } from '../interfaces/customers';
import { Observable } from 'rxjs';
import { Utenti } from '../interfaces/utenti';
import { Invoices } from '../interfaces/invoices';
import { IndirizzoSede } from '../interfaces/indirizzo-sede';
import { Comune } from '../interfaces/comune';
import { NgForm } from '@angular/forms';

let APIcustomers = 'http://localhost:3000/customers'
let APIinvoices = 'http://localhost:3000/invoices'
@Injectable({
  providedIn: 'root',
})
export class ComponentService{

  customers:Customers[]= []
  users: Utenti[] = []
  fatture: Invoices[] = []
  indirizzi: IndirizzoSede[] = []
  comuni: Comune [] = []

  constructor(private http:HttpClient){}

  getClients():Observable<Customers[]>{
   return this.http.get<Customers[]>(APIcustomers)
  }

  getInvoices():Observable<Invoices[]>{
    return this.http.get<Invoices[]>(APIinvoices)
  }

  deleteInvoice(id: number):Observable<Invoices>{
    return this.http.delete<Invoices>(`http://localhost:3000/invoices/${id}`)
  }

  //passare direttamente l'invoice
  addInvoice(invoice:Invoices):Observable<Invoices>{
    return this.http.post<Invoices>(APIinvoices, invoice)
  }

  //modifica stato pagamento
  modificaStato(id: number, stato:string):Observable<Invoices>{
    return this.http.patch<Invoices>(`http://localhost:3000/invoices/${id}`, {stato:stato})
  }

  
  

}
