import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  @Input() color: string = '';

  selector: HTMLElement = this._el.nativeElement;

  constructor(
    private _el: ElementRef
  ) {
    console.log(this._el.nativeElement);
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('hover');
    this.highlight(this.color);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
    this.highlight('');
  }

  highlight(color: string) {
    this.selector.style.backgroundColor = color;
    // this._el.nativeElement.style.backgroundColor = color;
  }
}
