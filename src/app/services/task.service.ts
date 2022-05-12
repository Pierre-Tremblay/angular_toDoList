import {Injectable} from '@angular/core';
import {Task} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  addTask(task: Task) {
    if (localStorage.getItem("tasks")) {
      let localTask = JSON.parse(localStorage.getItem("tasks") as string)
      localTask.push(task)
      localStorage.setItem("tasks", JSON.stringify(localTask))
    } else {
      localStorage.setItem("tasks", JSON.stringify([task]));
    }

  }

  getTasksByIdUser(idUser: number) {
    if (localStorage.getItem("tasks")) {

      //utilisation de la fonction filter pour filtrer par idUser
      return JSON.parse(<string>localStorage.getItem("tasks")).filter((task: { idUser: number; }) => task.idUser === idUser)
    }
  }
  onSwitchStatus(id:number){
    const tasks = JSON.parse(<string>localStorage.getItem("tasks"))
    tasks.forEach((task : Task) =>{
      if(task.id === id){
        task.done = !task.done
      }
    })
   localStorage.setItem("tasks", JSON.stringify(tasks));

  }
  deleteTask(id:number){
    const tasks = JSON.parse(<string>localStorage.getItem("tasks"))
    tasks.forEach((task : Task, index:number) =>{
      if(task.id === id){
        tasks.splice(index, 1)
      }

    })
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }
}
