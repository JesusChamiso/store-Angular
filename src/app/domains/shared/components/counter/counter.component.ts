import { Component, Input, SimpleChanges, OnChanges, OnInit, AfterViewInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() { 
    // before render
    // NO Async
    // una sola vez
    console.log('constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration)
    if(duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // una vez
    // async then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration)
    console.log('message => ', this.message)
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update(statePrevious => statePrevious + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // hijos ya fueron pintados?
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }
  doSomething() {
    console.log('Change duration');
  }

}
