import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDinamicComponent]'
})
export class DinamicComponentDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
