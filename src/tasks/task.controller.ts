import { Controller, Get } from "@nestjs/common";
import { TaskService } from './task.service';

@Controller({})
export class TaskController{

  taskService:TaskService

  constructor(taskService:TaskService){
    this.taskService=taskService;
  }

  @Get('/tasks')
  getAllTasks(){
    return  this.taskService.getTasks()
  }

  @Get('/home')
  getHome(){
    return 'Home page'
  }

}