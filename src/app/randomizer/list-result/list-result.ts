import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-result',
  imports: [],
  templateUrl: './list-result.html',
  styleUrl: './list-result.scss'
})
export class ListResult {

  groupes = input.required<string[][]>()

}
