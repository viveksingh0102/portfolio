import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @HostBinding('class.pc') pcMode = false
 constructor(private element:ElementRef, private breakpointObserver:BreakpointObserver) {
  this.breakpointObserver
  .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
  .subscribe({
    next:(result:any)=>{
      for (let breakpoint of Object.keys(result.breakpoints)){
        if(result.breakpoints[breakpoint]){
          if(breakpoint == Breakpoints.HandsetPortrait){
            this.element.nativeElement.classList.remove('pc')
          }
          if(breakpoint == Breakpoints.WebLandscape){
            this.element.nativeElement.classList.add('pc')
          }
        }
      }
    }
  })
}
}
