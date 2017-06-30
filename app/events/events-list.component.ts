import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Events</h1>
            <hr />
            <div class="well hoverwell thumbnail">
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div>Time: {{event.time}}</div>
                <div>Price: {{event.price}}</div>
                <div>
                    <span>Location: {{event.location.address}}</span>
                    <span>&nbsp;</span>
                    <span>{{event.location.city}}, {{event.location.country}}</span>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent {
    public event = {
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
}
