import { Injectable } from "@nestjs/common";

@Injectable({})
export class TaskService{

  getTasks(){
    return ['Task1','Task2']
  }
}