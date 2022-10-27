import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { IBoard } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  isEditing: boolean = false;
  curTaskId: number = 0;
  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column('Research', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);

  board2: IBoard = {
    name: "Test Board",
    columns: [
      {
      name: "Ideas",
      tasks: [
        {
          id: 1,
          name: "Some random idea"
        },
        {
          id: 2,
          name: "This is another random idea"
        },
        {
          id: 3,
          name: "build an awesome application"
        }
      ]},
      {
      name: "Research",
      tasks: [
        {
          id: 4,
          name: "Lorem ipsum"
        },
        {
          id: 5,
          name: "foo"
        },
        {
          id: 6,
          name: "This was in the 'Research' column"
        }]
      }
    ]
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  method(data: any) {
    if (this.curTaskId == 0) {
      this.curTaskId = data.id
    } else {
      this.curTaskId = 0
    }
    this.isEditing = !this.isEditing;
    console.log("abc");
  }
}
