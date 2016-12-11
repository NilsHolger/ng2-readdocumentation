import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[makeMyCarmenHappyHighlight]'
})
export class HighlightDirective {
  @Input('makeMyCarmenHappyHighlight') highlightColor: string;
  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this.defaultColor;
  }
  private _defaultColor = 'red'; //rainbow
  constructor(private el: ElementRef) {}
  

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;  
  }

}
