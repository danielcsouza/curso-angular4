import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscan' };
 leia = {name: 'Leia', isJedi: false };
 solo = {name: 'Han Solo', isJedi: false };
}
