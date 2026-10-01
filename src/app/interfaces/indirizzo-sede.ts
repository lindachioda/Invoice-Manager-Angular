import { Comune } from "./comune"

export interface IndirizzoSede {
  via: string
  civico: string
  cap: string
  comune: Comune
}
