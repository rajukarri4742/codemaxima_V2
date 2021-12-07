import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbootstrap';
  sideMenuList: any[] = [];
  public activeSidebar: string = '';
  public currentCount = 0;
  listOfPrograms: any[] = [];
  subTitle: string = "Hello World";
  programStatement: string[] = [];
  inputOutput: string[] = [];
  program: string = "";
  constructor(private appService: AppService,
    private router: Router  ) {

  }

  ngOnInit() {
    //Toggle Click Function
    this.sideMenuList = this.appService.listOfTopics;
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public getALLData(value: any) {
    console.log(value);
    this.activeSidebar = value.name;
    this.listOfPrograms = value.listOfPrograms;
    if (this.listOfPrograms.length > 0) {
      this.getData(this.listOfPrograms[0])
    } else {
      this.router.navigate(['/']);
    }
  }


  public getData(value: any) {
    this.subTitle = value.value;
    console.log(value);
    this.router.navigate([value.Link]);
    let arrTopic: any[] = this.appService.topis.filter(item => item.name == value);
    if (arrTopic.length > 0) {
      this.programStatement = arrTopic[0].problemStatement;
      this.inputOutput = arrTopic[0].inputOutput;
      this.program = arrTopic[0].program;
    }
    else {
      this.programStatement = [];
      this.inputOutput = [];
      this.program = "";
    }
  }

}
