import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: '[app-test]',
  template: '<div>
                Inline template
             </div>',
  styles: ['
    div {
       color: red;
    }
 ']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
