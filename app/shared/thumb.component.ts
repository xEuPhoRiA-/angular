import { Component, Input, OnChanges, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'acw-thumb',
  templateUrl: 'app/shared/thumbs.component.html',
  styleUrls: ['app/shared/thumbs.component.css']
})

export class ThumbComponent {
  @Input() rating: number;
  thumbsWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
      new EventEmitter<string>();

  ngOnChanges(): void {
    this.thumbsWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
