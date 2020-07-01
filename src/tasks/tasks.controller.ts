import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';

import { CreateTaskDto } from "./dto/create-task.dto";

import { Request, Response} from "express";

import { Task } from "./interfaces/Task";
import { TasksService} from './tasks.service';


@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    @Get()
    getTasks(): Promise<Task[]> {
        //return {"hello": "world"};
        return this.taskService.getTasks();
    }
    //Tambien podemos usar Express
    //getTask(@Req() req,@Res() res): Response{
    //    return res.send("Hello World");
    //}
    @Get(':taskId')
    getTask(@Param('taskId') taskId: string){
        return this.taskService.getTask((taskId));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(task);
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
        console.log(task);
        console.log(id);
        return 'Updating a Task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a task number: ${id}`;
    }
}
