import { Component, signal, WritableSignal } from '@angular/core';
import { ListPersonne } from "./list-personne/list-personne";
import { FormsModule } from '@angular/forms';
import { ListResult } from './list-result/list-result';

@Component({
  selector: 'app-randomizer',
  imports: [ListPersonne, FormsModule, ListResult],
  templateUrl: './randomizer.html',
  styleUrl: './randomizer.scss'
})
export class Randomizer {

  inputValue = signal("")

  numberInputValue = signal(1)

  groupes : WritableSignal<string[][]> = signal([])

  personnes : WritableSignal<string[]> = signal(["Lauranne", "Laurent", "Martin", "Nico", "Jonathan", "Yann", "Louis", "Benjamin", "Yassine", "Mohamed", "Wendie", "florian"])

  ajouterPersonne() : void{
    this.personnes.update(x => [...x, this.inputValue()])
    this.inputValue.set("")
  }

  deletePersonne(id : number){
    this.personnes.set(this.personnes().filter((_,i) => i !== id))
  }

  creerGroupes(){
    let tempPersonnes = [...this.personnes()] ; 
    tempPersonnes = tempPersonnes.sort(() => Math.random() - .5)
    let tempGroupes : string[][] = []
    for (let index = 0; index < this.numberInputValue(); index++) {
      tempGroupes.push([])
    }
    for (let index = 0; index < tempPersonnes.length; index++) {
      tempGroupes[index % this.numberInputValue()].push(tempPersonnes[index])
    }
    this.groupes.set(tempGroupes)
  }
  
}
