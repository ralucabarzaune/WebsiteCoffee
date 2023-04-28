import { Component } from '@angular/core';
import { Coffee } from '../Models/coffee';
import { CoffeeService } from '../Services/coffee.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private coffeeService: CoffeeService) {}

  text: string = "Hope you have a nice day";
  showSecondRow: boolean = false;
  my_list: string[] = ['Americano','Espresso', 'Machiato', 'Mocha']
  inputValue: string = '';
  coffeesFromDB: Coffee[] = [];
  newCoffeeName: string = '';
  newCoffeePrice: number = 0;

  changeText(): void {
    this.text = "There is a coffee for everyone";
  }

  showMoreButtons() {
    this.showSecondRow = true;
  }

  showLessButtons() {
    this.showSecondRow = false;
  }

  getCoffees() {
    this.coffeeService.getCoffees().subscribe(result => 
      {
      this.coffeesFromDB = result;
      });
  }

  addCoffee() {
    let newCoffee = {Name: this.newCoffeeName, Price: this.newCoffeePrice};
    this.coffeeService.addCoffee(newCoffee);
  }

}
