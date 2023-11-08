import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  // ...
} from '@angular/animations';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger("fade", [
      transition("false=>true", [
        style({ opacity: 0 }),
        animate("2500ms", style({ opacity: 1 }))
      ]),
      transition("true=>false", [animate("2500ms 2000ms", style({ opacity: 0 }))])
    ]),
    trigger("slide", [
      transition('* => false', [
        style({transform: 'translateY(0)', opacity: 0}),
        animate(
            '1500ms ease-in', 
            style({transform: 'translateY(0)', opacity: 1}))
      ]),
      transition('* => true', [
        animate(
          '1500ms ease-in', 
          style({transform: 'translateY(100px)', opacity: 0}))
      ])
    ]),
    trigger('enterExitRight', [
      transition('* => true', [
          style({ opacity: 0, transform: 'translateX(100px)' }),
          animate(
              '1500ms ease-in',
              style({ opacity: 1, transform: 'translateX(0)' })
          ),
      ]),
      transition('* => false', [
          animate(
              '1500ms ease-in',
              style({ opacity: 0, transform: 'translateX(100px)' })
        ),
      ]),
    ]),
    trigger('enterExitLeft', [
      transition('* => true', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          animate(
              '1500ms ease-in',
              style({ opacity: 1, transform: 'translateX(0)' })
          ),
      ]),
      transition('* => false', [
          animate(
              '1500ms ease-in',
              style({ opacity: 0, transform: 'translateX(-100px)' })
          ),
      ]),
    ]),
    trigger('flipState', [
      state('active', style({
        opacity: 0,transform: 'rotateY(180deg)'
      })),
      state('inactive', style({
        opacity: 1,transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('2000ms ease-out')),
      transition('inactive => active', animate('2000ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'animationAng';
  

  imageArray = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6"
  ];

  toogle = true;;
  count: number = 0;
  toogle2 = true;;
  count2: number = 0;
  toogle3 = true;;
  count3: number = 0;
  toogle4 = true;;
  count4: number = 0;
  
  animate(event:any) {
    this.toogle = !this.toogle;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate2(event:any) {
    this.toogle2 = !this.toogle2;
    if(event.fromState)
      this.count2 =(this.count2+1)% this.imageArray.length;  
  }
  animate3(event:any) {
    this.toogle3 = !this.toogle3;
    if(event.fromState)
      this.count3 =(this.count3+1)% this.imageArray.length;  
  }
  animate4(event:any) {
    this.toogle4 = !this.toogle4;
    if(event.fromState)
      this.count4 =(this.count4+1)% this.imageArray.length;  
  }

  state: string = 'inactive';
    rotate() {
      this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
  
}


  

 
