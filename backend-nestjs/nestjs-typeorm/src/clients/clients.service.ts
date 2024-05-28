import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { EntityManager, Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from './dto/login.dto';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientsRepository: Repository<Client>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const hashedPassword = await bcrypt.hash(createClientDto.password, 10); //comenta essa linha se quiser tirar a criptografia
    const client = this.clientsRepository.create({
      ...createClientDto,
      password: hashedPassword, //comenta essa linha se quiser tirar a criptografia
    });
    await this.clientsRepository.save(client);
    return client;
  }

  async findAll() {
    return this.clientsRepository.find();
  }

  async findOne(id: number) {
    return this.clientsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientsRepository.findOne({ where: { id } });
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    client.name = updateClientDto.name;
    client.email = updateClientDto.email;
    await this.entityManager.save(client);
  }

  async remove(id: number) {
    await this.clientsRepository.delete(id);
  }

  async login(loginDto: LoginDto) {
    const client = await this.clientsRepository.findOne({ where: { email: loginDto.email } });
    if (client && await bcrypt.compare(loginDto.password, client.password)) {
      // Implement JWT or session based authentication here
      return client;
    } else {
      throw new UnauthorizedException('Email or password incorrect');
    }
  }

}

  

  

