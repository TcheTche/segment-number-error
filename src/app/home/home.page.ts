import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: UntypedFormGroup;

  constructor(    public formBuilder: UntypedFormBuilder,
    ) {
      this.form = this.formBuilder.group({
          segment: [3],
    });
      this.form.patchValue({segment:"3"})
  }
}
