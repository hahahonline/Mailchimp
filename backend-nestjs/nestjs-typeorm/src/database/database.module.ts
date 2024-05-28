import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host : configService.get<string>('POSTGRES_HOST'),
                port : configService.get<number>('POSTGRES_PORT'),
                database : configService.get<string>('POSTGRES_DB'),
                username : configService.get<string>('POSTGRES_USER'),
                password : configService.get<string>('POSTGRES_PASSWORD'),
                autoLoadEntities: true,
                synchronize: configService.get<boolean>('POSTGRES_SYNCHRONIZE', true),
            }),
            inject: [ConfigService],
        }),
    ],
})

export class DatabaseModule {}