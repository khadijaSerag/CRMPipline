import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Deal } from './deal';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent {
  deals: any = [];
  apiUrl = 'https://my-json-server.typicode.com/mabukoush1/contacts/db';

  search: string = '';

  constructor(private _SharedService: SharedService) {}

  ngOnInit(): void {
    this.loaddata();
  }

  onSearch() {
    this.loaddata();
  }

  loaddata() {
    // if (this.search != '') {
    //   this.apiUrl = `https://my-json-server.typicode.com/mabukoush1/contacts/db?&Filter.Filters[0].operator=contains&Filter.Filters[0].value=${this.search}&Filter.Filters[0].field=first_name&Filter.Logic=or&Filter.Filters[1].operator=contains&Filter.Filters[1].value=${this.search}&Filter.Filters[1].field=last_name&Filter.Filters[2].operator=contains&Filter.Filters[2].value=${this.search}&Filter.Filters[2].field=email`;
    // }

    this._SharedService.get(this.apiUrl).subscribe((data) => {
      this.deals = data.deals;
    });
  }

  drop(event: CdkDragDrop<Deal[]>) {
    this.deals[event.previousIndex].status = event.container.id;
    moveItemInArray(this.deals, event.previousIndex, event.currentIndex);

    // console.log("event p===", event.previousIndex)
    // console.log("event c===", event.currentIndex)
    // console.log("event===", event)
  }
}
