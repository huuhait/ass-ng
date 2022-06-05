import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.less']
})
export class HelloWorldComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(3)]),
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    this.formGroup.markAsDirty();
    this.formGroup.updateValueAndValidity();
    console.log(this.formGroup)
  }

}
