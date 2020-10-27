import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  //Buscar dados depois da palavra em
  @Input('myForEm') numbers: number[]

  constructor(private container:ViewContainerRef,private template: TemplateRef<any>) { }

  ngOnInit(){

    for (let number of this.numbers){
      this.container.createEmbeddedView(this.template,{$implicit: number})
    }
  }

}
