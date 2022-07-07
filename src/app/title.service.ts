import { Injectable } from '@angular/core';
import { Title } from './title.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor() { }
  getTitles() : Observable<Title[]>{
    return of ([
      {name :'Mr', isDefault: false},
      {name : 'Mrs', isDefault:false},
       {name: 'Miss', isDefault:false}, 
      {name : '!', isDefault:false},
    {name : 'Dr', isDefault:true},
     {name : 'Prof',isDefault:false} 
    ]);
  }
}
