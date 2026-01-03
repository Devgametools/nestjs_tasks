export class CreateTaskDto {
  title: string;
  description: string;
}
export class UpdateTaskDto {
  title?: string;
  description?: string;
}
export class GetTasksFilterDto {
  status?: string;
  search?: string;
}
