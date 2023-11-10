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
    ]),
    trigger('bounceInOut', [
      transition('* => false', [
        style({ transform: 'scale(0)', opacity: 1}),
        animate('1500ms cubic-bezier(.8, 0.2, 0.2, 0.2)',
        style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition('* => true', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('1500ms cubic-bezier(.8, 0.2, 0.2, 0.2)',
        style({ transform: 'scale(0)', opacity: 1 }))
      ])
    ]),
    trigger('zoomInRight', [
      transition('*=>true',[
        style({
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(800px, 0, 0)'}),
        animate('1500ms cubic-bezier(0.55, 0, 0, 0.19)',
        style({transform: 'scale(1 )',opacity: 1}))
      ]),
      transition('*=>false',[
        style({
          opacity: 1,
          transform: 'scale(1, 1, 1) '}),
        animate('1500ms cubic-bezier(0.55, 0, 0, 0.19)',
        style({transform:'scale(0) translate3d(-800px, 0, 0)',opacity: 0})),
      ])
    ]),
    trigger('rollInOut',[
      transition('*=>true',[
        style({
          opacity:0,
          transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)'}),
          animate('2000ms cubic-bezier(0, 0, 0, 1)',
          style({ opacity: '1', transform:'scale(1) translate3d(0, 0, 0)' }))
      ]),
      transition('*=>false',[
          animate('2000ms cubic-bezier(0, 0, 0, 0.1)',
          style({ 
            opacity: '0', 
            transform: 'scale(1) translate3d(100%, 0, 0) rotate3d(0,0 , 1,120deg)' }))
      ])
    ]),
    trigger('rotateInOut',[
      transition('*=>true',[
        style({
          opacity:0,
          transform:'rotate3d(0, 0, 1, -200deg) translate3d(0, 0, 0)'}),
        animate('2000ms cubic-bezier(0, 0, 0, 1)',
        style({
          transform:'translate(0, 0, 0)',
          opacity:1
        })),
      ]),
      transition('*=>false',[
        style({
          opacity:1,
        }),
        animate('2000ms cubic-bezier(0, 0, 0, 0.1)',
        style({
          transform:'translate(0, 0, 0) rotate3d(0, 0, 0, -200deg translate3d(100%, 0, 0)',
          opacity:1
        }))
      ])
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

  toogle = true;
  toogle2 = true;
  toogle3 = true;
  toogle4 = true;
  toogle5 = true;
  toogle6 = true;
  toogle7 = true;
  toogle8 = true;
  toogle9 = true;

  state: string = 'inactive';

  count: number = 0;

  animate0() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
  animate1(event:any) {
    this.toogle = !this.toogle;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate2(event:any) {
    this.toogle2 = !this.toogle2;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate3(event:any) {
    this.toogle3 = !this.toogle3;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate4(event:any) {
    this.toogle4 = !this.toogle4;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate5(event:any) {
    this.toogle5 = !this.toogle5;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate6(event:any) {
    this.toogle6 = !this.toogle6;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate7(event:any) {
    this.toogle7 = !this.toogle7;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate8(event:any) {
    this.toogle8 = !this.toogle8;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  animate9(event:any) {
    this.toogle9 = !this.toogle9;
    if(event.fromState)
      this.count =(this.count+1)% this.imageArray.length;  
  }
  
}


  

 
