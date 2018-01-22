import { Component, OnInit, Input} from '@angular/core';
import { Students } from './students.model';


@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  @Input() estudante: Students

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log("O Estudante é " + this.estudante.name);
  }
}
