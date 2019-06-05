<<<<<<< HEAD
import { Component } from '@angular/core';
import { Students } from './student/students.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 estudantes: Students[] = [
 {name: 'Luke', isJedi: true, temple: 'Coruscan' },
 {name: 'Leia', isJedi: false },
 {name: 'Han Solo', isJedi: false }];
=======
import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7
}
