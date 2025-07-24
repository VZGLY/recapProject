import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-list-personne',
  imports: [],
  templateUrl: './list-personne.html',
  styleUrl: './list-personne.scss'
})
export class ListPersonne {
  personnes = input.required<string[]>()

  delEvent = output<number>()

  deleteElement(id : number){
    this.delEvent.emit(id)
  }
}
