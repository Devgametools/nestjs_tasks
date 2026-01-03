import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(body: CreateTaskDto): Task[] {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: body.title,
      description: body.description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }
  deleteTask(id: number): Task[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }
  updateTaskStatus(id: number): Task[] {
    const task = this.tasks.find((task) => task.id === id);
    console.log(task);
    if (task) {
      task.status =
        task.status === TaskStatus.PENDING
          ? TaskStatus.IN_PROGRESS
          : TaskStatus.DONE;
    }
    return this.tasks;
  }
  updateTask(id: number, body: UpdateTaskDto): Task[] {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      if (body.title) {
        task.title = body.title;
      }
      if (body.description) {
        task.description = body.description;
      }
    }
    return this.tasks;
  }
}
