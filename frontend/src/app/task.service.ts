import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createBoard(title: string) {
    //We want to send a web request to create a board
    return this.webReqService.post(`boards`, { title });
  }

  getBoards() {
    return this.webReqService.get('boards');
  }

  getTasks(boardId: string) {
    return this.webReqService.get(`boards/${boardId}/tasks`);
  }
}
