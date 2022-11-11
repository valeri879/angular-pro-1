import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor() { }

  public hello(name: string) {
    console.log(name);
  }
}
