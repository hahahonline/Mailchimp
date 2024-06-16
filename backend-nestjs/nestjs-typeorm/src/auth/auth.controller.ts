import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../clients/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginClientDto: LoginDto) {
    const token = await this.authService.login(loginClientDto);
    if (!token) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return token;
  }
}

