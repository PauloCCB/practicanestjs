import { Injectable } from "@nestjs/common";

export interface Task {
  data1: string;
  data2: string;
}

@Injectable({})
export class TaskService{

  private tasks: Task[] = [];


  getTasks(){
    return this.tasks
  }

  createTasks(task:Task){
    console.log(task)
    this.tasks.push(task)
    return task
  }
}