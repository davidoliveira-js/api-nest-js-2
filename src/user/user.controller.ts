import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':userName')
  public getUserByName(@Param('userName') data: string) {
    const user = this.userService.findUserByName(data);
    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado.',
      });
    }
    return user;
  }

  @Post()
  public createUser(@Body() data: User): NestResponse {
    const user = this.userService.create(data);

    return new NestResponseBuilder()
      .setStatus(HttpStatus.CREATED)
      .setHeaders({
        Location: `/users/${user.name}`,
      })
      .setBody(user)
      .build();
  }
}
