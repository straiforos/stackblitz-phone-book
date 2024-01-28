import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ContactsService } from '@services/contacts/contacts.service';
import { Contact as IContact } from '@interfaces/models';

export const contactResolver: ResolveFn<IContact | undefined> = (
  route,
  state,
) => {
  return inject(ContactsService).read(parseInt(route.paramMap.get('id')!));
};
