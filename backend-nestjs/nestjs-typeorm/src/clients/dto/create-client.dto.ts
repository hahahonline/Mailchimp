import { IsEmail, IsNotEmpty, IsNumber, IsStrongPassword, MinLength } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @MinLength(11)
  cpf: string;
}