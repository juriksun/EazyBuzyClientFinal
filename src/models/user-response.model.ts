import { User } from "./user.model";
export class UserResponse{
    constructor(
        public status: boolean,
        public message: string,
        public errors: [{name: string, message: string}], 
        public user: User
    ){}
}