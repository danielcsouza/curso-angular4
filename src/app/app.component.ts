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
}
