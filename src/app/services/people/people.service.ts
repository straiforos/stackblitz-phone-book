import { Injectable } from '@angular/core';
import { Person } from '../../interfaces/models/person';
import { PeopleAPI } from '../../interfaces/services/people';
import { LocalAPIService } from '../local-api.service';

@Injectable()
export class PeopleService
  extends LocalAPIService<Person>
  implements PeopleAPI
{
  constructor() {
    super();
  }
}
