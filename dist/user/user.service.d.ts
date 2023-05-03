import { User } from './user.entity';
export declare class UserService {
    private users;
    findUserByName(data: string): User;
    create(data: User): User;
}
