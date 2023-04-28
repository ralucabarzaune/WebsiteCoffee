import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Coffee } from '../Models/coffee';
import { addDoc ,collection, collectionData, Firestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private fs: Firestore) { }

  getCoffees(): Observable< Coffee[]> {
    const myCollection: any = collection(this.fs, 'coffees');
    return collectionData(myCollection);
  }

  addCoffee(coffee: Coffee) {
    const myCollection = collection(this.fs, 'coffees');
    addDoc(myCollection, coffee);
  }
}
