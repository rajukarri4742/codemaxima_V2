import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-common',
  templateUrl: './video-common.component.html',
  styleUrls: ['./video-common.component.css']
})
export class VideoCommonComponent implements OnInit {
  @Input() public url?:any;
  constructor() { }

  actButton: any = 1.0;

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number){
  
    this.actButton = speed;
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
    
  }

}
