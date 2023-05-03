import { UserService } from './user.service';
import { User } from './user.entity';
import { NestResponse } from 'src/core/http/nest-response';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserByName(data: string): User;
    createUser(data: User): NestResponse;
}
