import { Component, EventEmitter, Output } from '@angular/core';
import { setInterval, clearInterval } from 'timers';

@Component({
  selector: 'app-game-control',
  template: `
    <button (click)="start()">Start game</button>
    <button (click)="stop()">End game</button>
  `
})
export class GameControlComponent {
  interval;
  @Output()
  timerEvent = new EventEmitter();
  start() {
    this.interval = setInterval(() => {
      this.timerEvent.emit(Math.floor(Math.random() * 100));
    }, 1000)
  }

  stop() {
    clearInterval(this.interval)
  }
}
