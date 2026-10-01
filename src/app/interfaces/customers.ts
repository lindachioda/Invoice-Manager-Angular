import { IndirizzoSede } from "./indirizzo-sede"


export interface Customers {
  id: number
  ragioneSociale: string
  partitaIva: string
  tipoCliente: string
  email: string
  pec: string
  telefono: string
  nomeContatto: string
  cognomeContatto: string
  telefonoContatto: string
  emailContatto: string
  indirizzoSede: IndirizzoSede
}
