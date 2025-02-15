import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeanModule } from './bean/bean.module';
import { DatabaseModule } from './database/database.module';
import { ExtractionModule } from './extraction/extraction.module';
import { AuthModule } from './auth/auth.module';
import { GroupModule } from './group/group.module';
import { TokenBypassMiddleware } from './auth/token-bypass.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GroupService } from './group/group.service';
import { FrontendMiddleware } from './middlewares/FrontendMiddleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        GROUP_TOKEN: Joi.string().optional(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_SSL: Joi.boolean().required(),
      }),
    }),
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        user: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        ssl: configService.get('POSTGRES_SSL'),
      }),
    }),
    ExtractionModule,
    BeanModule,
    GroupModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule, OnApplicationBootstrap {
  constructor(
    private readonly configService: ConfigService,
    private readonly groupService: GroupService,
  ) {}

  onApplicationBootstrap() {
    const token = this.configService.get('GROUP_TOKEN');
    if (token) {
      console.log(`Check for token ${token}`);
      this.groupService.validateOrCreate(token);
    }
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenBypassMiddleware).forRoutes('api/*');
    consumer.apply(FrontendMiddleware).forRoutes('*');
  }
}
