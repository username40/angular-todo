import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from 'src/app/model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

  toggleTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }
}
