import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Events</h1>
            <hr />
            <event-thumbnail [event]="event1" (eventClick)="handleEventClicked($event)"></event-thumbnail>
        </div>
    `
})
export class EventsListComponent {
    public event1 = {
        id: 1,
        name: 'Stupidcon',
        date: '5/3/18',
        time: '10:00am',
        price: 3.50,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '123 Dumb Lane',
            city: 'Dullsville',
            country: 'Blah'
        }
    }

    public handleEventClicked($event) {
        console.log(`event received: ${this.event1.name}`);
    }
}
