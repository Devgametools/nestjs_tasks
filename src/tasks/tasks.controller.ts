import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  @Post()
  createTask(@Body() body: CreateTaskDto): Task[] {
    return this.tasksService.createTask(body);
  }
  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number): Task[] {
    return this.tasksService.deleteTask(id);
  }
  @Patch('update-status')
  updateTaskStatus(@Query('id', ParseIntPipe) id: number): Task[] {
    return this.tasksService.updateTaskStatus(id);
  }
  @Patch('update-task')
  updateTask(
    @Query('id', ParseIntPipe) id: number,
    @Body() body: UpdateTaskDto,
  ): Task[] {
    return this.tasksService.updateTask(id, body);
  }
}
