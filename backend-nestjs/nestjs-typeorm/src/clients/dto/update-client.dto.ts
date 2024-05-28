import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from 'class-validator';

export class UpdateClientDto {
  @IsNotEmpty()
  name?: string;

  @IsEmail()
  email?: string;

  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @MinLength(11)
  cpf?: string;
}