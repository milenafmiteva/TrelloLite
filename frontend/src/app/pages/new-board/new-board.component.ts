import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createBoard(title: string) {
    this.taskService.createBoard(title).subscribe((response: any) => {
      console.log(response);
      //Now we navigate to /boards/response._id
    });
  }
}
