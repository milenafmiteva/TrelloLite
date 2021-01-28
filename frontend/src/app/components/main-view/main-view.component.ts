import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/border.model';
import { Column } from 'src/app/models/column.model';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  boards: any[];
  tasks: any[];

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  board: Board = new Board('Test Board', [
    new Column('To do', [
      "Some random idea",
      "This is anothre idea"
    ]),
    new Column('In Progress', [
      "One",
      "Two"
    ]),
    new Column('Compleate', [

    ])
  ]);

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);

        this.taskService.getTasks(params.boardId).subscribe((tasks: any[]) => {
          this.tasks = tasks;
        });
      }
    )

    this.taskService.getBoards().subscribe((boards: any[]) => {
      this.boards = boards;
    })
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

  createNewBoard() {
    this.taskService.createBoard('Testing').subscribe((response: any) => {
      console.log(response);
    });
  }
}
