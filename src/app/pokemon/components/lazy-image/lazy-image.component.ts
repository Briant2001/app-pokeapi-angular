import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {


  ngOnInit(): void {
    if (!this.url) {
      throw new Error("URL property is requerid");
    }
  }
  onLoad(){
    console.log("Image Loaded");
    this.hasLoader=true
  }
  public hasLoader:boolean=false
  @Input()
  public url! :string
  @Input()
  public alt! :string

}
