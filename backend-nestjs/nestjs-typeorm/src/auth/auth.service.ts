import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientsService } from '../clients/clients.service';
import { LoginDto } from '../clients/dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private clientsService: ClientsService,
    private jwtService: JwtService
  ) {}

  async validateClient(email: string, pass: string): Promise<any> {
    const client = await this.clientsService.findByEmail(email);
    if (client && await bcrypt.compare(pass, client.password)) {
      const { password, ...result } = client;
      return result;
    }
    return null;
  }

  async login(loginClientDto: LoginDto) {
    const { email, password } = loginClientDto;
    const client = await this.validateClient(email, password);
    if (!client) {
      return null;
    }
    const payload = { username: client.email, sub: client.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
