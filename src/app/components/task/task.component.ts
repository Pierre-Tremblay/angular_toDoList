import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Task} from "../../models/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = []
  idCategory: number = 0
  @Input() idUser: number = 0
  taskForm: FormGroup = this.formBuilder.group({
    id: Math.floor(Math.random() * 1000),
    title: '',
    description: '',
    done: false,
    idUser: this.idUser,
    idCategory: this.idCategory
  })


  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getTasks()




  }

  addTask() {
    this.taskService.addTask({
      id: Math.floor(Math.random() * 1000),
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      done: false,
      idUser: this.idUser,
      idCategory: this.idCategory
    });

    this.taskForm.reset()
    this.getTasks()

  }


  getTasks() {
    this.tasks = []
    this.tasks = this.taskService.getTasksByIdUser(this.idUser)
  }


  onSwitchStatus(id: number) {
    this.taskService.onSwitchStatus(id)
    this.getTasksByIdCategoryAndUser(this.idCategory, this.idUser)
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id)
    this.getTasksByIdCategoryAndUser(this.idCategory, this.idUser)
  }

  onChangeCategory(idCategory: number) {
    this.idCategory = idCategory
    this.getTasksByIdCategoryAndUser(this.idCategory, this.idUser)
  }

  getTasksByIdCategoryAndUser(idCategory: number, idUser: number) {

    let filteredTasks: Task[] = []
    this.tasks = [];
    this.getTasks();
    if(idCategory == 0){
      return this.getTasks()
    }
    this.tasks.forEach((task: Task) => {
      if (task.idCategory === idCategory && task.idUser === idUser) {
        filteredTasks.push(task)
      }
    })
    return this.tasks = filteredTasks

  }

}
