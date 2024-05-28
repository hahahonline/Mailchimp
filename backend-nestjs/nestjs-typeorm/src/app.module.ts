import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule, 
    ClientsModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}