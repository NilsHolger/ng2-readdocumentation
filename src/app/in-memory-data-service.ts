import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, name: 'Mr. Nice'}, 
      {id: 2, name: 'Superman'},
      {id: 3, name: 'Spiderman'}, 
      {id: 4, name: 'Flash'},
      {id: 5, name: 'Bombasto'},
      {id: 6, name: 'Wonderwoman'},
      {id: 7, name: 'Dr. IQ'},
      {id: 8, name: 'Batman'},
      {id: 9, name: 'Green Arrow'},
      {id: 10, name: 'Rohrschach'}
    ];
    return {heroes};
  }
}