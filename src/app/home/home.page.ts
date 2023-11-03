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
          segment: [],
    });
      this.form.patchValue({segment:3}) // doesn't work while it should
      this.form.patchValue({segment:"3"}) // works
  }
}
