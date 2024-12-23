import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  element = inject(ElementRef);
  // constructor() { }
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}