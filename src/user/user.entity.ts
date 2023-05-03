import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { UniqueUserName } from './user-unique-name';
import { Exclude, Expose } from 'class-transformer';

export class User {
  id: number;

  // @Expose({
  //   name: 'nome',
  // }) transforma o nome do atributo
  @IsNotEmpty()
  @IsString()
  @UniqueUserName({
    message: 'Este nome de usuário já está sendo utilizado.',
  })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty()
  @IsString()
  @Length(6, 8)
  password: string;
}
