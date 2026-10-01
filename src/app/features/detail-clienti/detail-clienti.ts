import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ComponentService } from '../../servicies/component-service';
import { Invoices } from '../../interfaces/invoices';
import { CommonModule } from '@angular/common';
import { Customers } from '../../interfaces/customers';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-clienti',
  imports: [CommonModule, FormsModule],
  templateUrl: './detail-clienti.html',
  styleUrl: './detail-clienti.scss',
})
export class DetailClienti implements OnInit, OnChanges{

  fatture: Invoices[] = []
  indirizzi: Customers[] = []
  comuni: Customers [] = []
  customers:Customers[]= []
  //fatture filtrate per regione sociale dell'utente:
  fattureCliente:Invoices[]=[]
  //(click) per accedere all'info della fattura del cliente in modale
  infoFattura?:Invoices
  search=''

  constructor(private componentService:ComponentService){}

  @Input() clienti?: Customers
  @Input() invoices?: Invoices

  //OnChanges per cambiare l'input cliente ogni volta che clicco un clientediverso e riapplica il filtro!!
  ngOnChanges(changes: SimpleChanges): void {
    this.filtraFatture()
  }

  getInvoice():any{
    this.componentService.getInvoices().subscribe(
      res => {
        this.fatture = res
        console.log(res)

        if(this.clienti)
          this.filtraFatture()
      }
    )
  }

  //FILTRA FATTURE PER REGIONE SOCIALE
 filtraFatture():any{
  if(!this.clienti) return
  //fattureCliente filtrate per cliente
  this.fattureCliente = this.fatture.filter(
    //"invoices" fattura.cliente corrisponde in "customers" a ragioneSociale
    fattura => fattura.cliente === this.clienti?.ragioneSociale
  )
 }

 deleteInvoice(id:number):any {
  this.componentService.deleteInvoice(id).subscribe(()=> {
    //fattureCliente filtrate per cliente
    this.fattureCliente = this.fattureCliente.filter(
      fattura => fattura.id !== id
    )
  })
 }

 //cambia stato fattura nel json
 changeStatus(infoFattura:Invoices){
  //if(infoFattura.stato === 'PAGATA'){
     //infoFattura.stato = 'NON PAGATA'
  //}else{
    //infoFattura.stato = 'PAGATA'
  //}
  let nuovoStato = infoFattura.stato === 'PAGATA' ? 'NON PAGATA' : 'PAGATA'
  this.componentService.modificaStato(infoFattura.id, nuovoStato).subscribe((res)=>{
    infoFattura.stato = res.stato
  })
 }

ngOnInit(): void {
  this.getInvoice()
  //this.getIndirizzi()
  //this.getComuni()
  //this.getDatiClienti()
}

  //getIndirizzi():any{
   // this.componentService.getIndirizzoSede().subscribe(
     // res => {
     //   this.indirizzi = res
       // console.log(res)
     // }
   //)
 // }

  //getComuni():any{
    //this.componentService.getComune().subscribe(
      //res => {
       // this.comuni = res
       // console.log(res)
     // }
   // )
  //}

  //getDatiClienti():any{
    //this.componentService.getClients().subscribe(
      //res => {
        //this.customers = res
        //console.log(res)
      //}
   // )
 // }

 get fattureSearch():Invoices[] {
  if (!this.search.trim()) {
    return this.fattureCliente
  }
  return this.fattureCliente.filter(fattura =>
    //per la ricerca del numero
    fattura.numero.toString().includes(this.search))
}
 

}
