import { Directive, OnInit } from '@angular/core';
import { ContactFormComponent } from '@components/contact-form/contact-form.component';
import { ActivatedRoute } from '@angular/router';

/**
 * Edit Contact Directive is an approach to extend not modify the existing creation form but inject the resolved data with more control and the withComponentInputBinding() can provide.
 * @see EditContactComponent
 * @see withComponentInputBinding
 * @see contactResolver
 */
@Directive({
  selector: '[appEditContact]',
})
export class EditContactDirective implements OnInit {
  constructor(
    private contactForm: ContactFormComponent,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.data && this.route.snapshot.data['contact'])
      this.contactForm.contact = this.route.snapshot.data['contact'];
  }
}
