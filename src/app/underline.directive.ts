import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective {
  constructor(private elem: ElementRef) {}

  @HostListener('click') onClicks() {
    this.textDeco('underline');
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.textDeco('None');
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }
}
