import { DatePipe } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-break-timer',
  imports: [DatePipe],
  templateUrl: './break-timer.html',
  styleUrl: './break-timer.scss'
})
export class BreakTimer implements OnInit {

  message = signal("");

  date : WritableSignal<Date> = signal(new Date());

  pauses = [
    {debut : new Date(0,0,0,10,0,0), fin : new Date(0,0,0,10,15,0)},
    {debut : new Date(0,0,0,12,0,0), fin : new Date(0,0,0,13,0,0)},
    {debut : new Date(0,0,0,15,0,0), fin : new Date(0,0,0,15,15,0)}
  ]

  ngOnInit(): void {
    this.update()
    setInterval(() => {
      this.update()
    }, 1000)
  }

  update(){
    this.date.set(new Date())
      if (this.isPause()) {
        this.message.set("C'EST LA PAUSE !")
      }
      else{
        this.message.set("On bosse !")
      }
  }


  isPause(): boolean{
    let actualHour = new Date(0,0,0, this.date().getHours(), this.date().getMinutes(), this.date().getSeconds());

    for (const pause of this.pauses) {
      if (actualHour >= pause.debut && actualHour <= pause.fin) {
        return true;
      }
    }
    return false;
  }

  

}
