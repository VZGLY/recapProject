import { DatePipe } from '@angular/common';
import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-break-timer',
  imports: [DatePipe],
  templateUrl: './break-timer.html',
  styleUrl: './break-timer.scss'
})
export class BreakTimer implements OnInit {

  message = signal("");

  date : WritableSignal<Date> = signal(new Date());

  latestTickInPause = signal(false)

  music = new Audio("/musics/Kool & The Gang - Celebration.mp3")

  pauses = [
    {debut : new Date(0,0,0,0,0,0), fin : new Date(0,0,0,8,30,0)},
    {debut : new Date(0,0,0,10,0,0), fin : new Date(0,0,0,10,15,0)},
    {debut : new Date(0,0,0,12,0,0), fin : new Date(0,0,0,13,0,0)},
    {debut : new Date(0,0,0,15,0,0), fin : new Date(0,0,0,15,15,0)},
    {debut : new Date(0,0,0,16,25,0), fin : new Date(0,0,1,0,0,0)}
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
        if (!this.latestTickInPause()) {
          console.log(this.music);
          
          this.music.play()
        }
        if (this.getSecondUntilNextPause() === -1) {
          this.message.set("👯‍♀️ Il n'y a pas cours. 🍕🌴")
        }
        else{
          this.message.set("🌴 C'EST LA PAUSE ! 🍺")
        }
        
        this.latestTickInPause.set(true)
      }
      else{
        let seconds = this.getSecondUntilNextPause()
        let timeRemaining = `${Math.floor(seconds / 3600)} heures ${Math.floor(seconds / 60) % 60} minutes ${seconds % 60} secondes`
        this.message.set("Prochaine pause 🕰️ : " + timeRemaining)
        this.latestTickInPause.set(false)
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

  getSecondUntilNextPause() : number{
    let actualHour = new Date(0,0,0, this.date().getHours(), this.date().getMinutes(), this.date().getSeconds());

    for (const pause of this.pauses) {
      if (this.pauses.indexOf(pause) === 0) {
        if (actualHour < pause.fin) {
          return -1;
        }
      }
      else if(actualHour < pause.debut) {
        
        return Math.floor((pause.debut.getTime() - actualHour.getTime()) / 1000)
      }
    }
    return -1
  }

}
