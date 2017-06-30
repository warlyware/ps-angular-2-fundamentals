import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: '/app/events/event-thumbnail.html'
})
export class EventThumbnailComponent {

    @Input() public event: any;
    @Output() public eventClick = new EventEmitter()

    handleClickMe() {
        this.eventClick.emit('fooooooo');
        console.log('clicked');
    }

}
