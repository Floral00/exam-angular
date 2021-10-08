import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRestaurantEvaluation]'
})
export class RestaurantEvaluationDirective {

  @Input("appRestaurantEvaluation")
  set indexOfElement(value: string) {
    if(value === "/") {
      this._renderer.setStyle(this._el.nativeElement,"Color", "grey");
    }
    else {
      var evaluation = Number(value);
      if(evaluation < 1 ) {
        this._renderer.setStyle(this._el.nativeElement,"Color", "grey");
      }
      else {
        this._renderer.setStyle(this._el.nativeElement,"Color", "yellow");
      }
    }

  }
  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

}
