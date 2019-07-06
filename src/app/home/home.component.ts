import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../service/TransactionService.service';
import { MenuItem } from 'primeng/api';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  cars: any[];
  projects: Set<string>;
  ratings: any[];
  data: any;
  filterText: any;
  filtered: any[];

  activeItem: MenuItem;
  constructor(private carService: TransactionService) {}

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => {
      this.cars = cars as any[];
      this.getProjects();
      this.getRatings();
      this.onFilter();
    });

    this.items = [
      { label: 'Таблица транзакций', command: () => this.selectMenu(0) },
      { label: 'Список проектов', command: () => this.selectMenu(1) },
      { label: 'Платёжные системы', command: () => this.selectMenu(2) }
    ];
    this.activeItem = this.items[0];
  }
  public onFilter() {
    if (this.filterText === '' || this.filterText === undefined) {
      this.filtered = this.cars;
      return;
    }
    this.filtered = this.cars.filter(x =>
      x.transaction.project.name
        .toLowerCase()
        .includes(this.filterText.toLowerCase())
    );
  }

  private getProjects() {
    this.projects = new Set(this.cars.map(x => x.transaction.project.name));
  }
  private getRatings() {
    let names = this.cars.map(x => x.transaction.payment_method.name);
    let result = this.foo(names);

    let unsorted = result[0].map((x, index) => {
      return {
        label: x,
        frequency: result[1][index]
      };
    });
    this.ratings = unsorted.sort((x, y) => y.frequency - x.frequency);

    this.data = {
      labels: this.ratings.map(x => x.label),
      datasets: [
        {
          label: 'Популярность платёжных систем',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: this.ratings.map(x => x.frequency)
        }
      ]
    };
  }
  private foo(arr) {
    var a = [],
      b = [],
      prev;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }
    return [a, b];
  }

  private selectMenu(index: number) {
    this.activeItem = this.items[index];
  }
}
