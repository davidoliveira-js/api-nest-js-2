import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UniqueUserNameValidator } from './user-unique-name';

@Module({
  controllers: [UserController],
  providers: [UserService, UniqueUserNameValidator],
})
export class UserModule {}
