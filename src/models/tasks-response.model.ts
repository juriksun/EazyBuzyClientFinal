import { Task } from "./task.model";
export class TaskResponse{
    constructor(
        public status: boolean,
        public message: string,
        public errors: [{name: string, message: string}], 
        public tasks: Task[]
    ){}
}