import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import {   TaskService } from './task.service';
import type {Task} from './task.service';

@Controller('/api')
export class TaskController{

  taskService:TaskService

  constructor(taskService:TaskService){
    this.taskService=taskService;
  }

  @Get('/all')
  getAllTasks(@Query() query:any){
    console.log(query)
    return  this.taskService.getTasks()
  }

  @Get('/home')
  getHome(){
    return 'Home page'
  }

  @Post('/tasks')
  createTask( @Body() task:Task ){
    return this.taskService.createTasks(task)
  }

}