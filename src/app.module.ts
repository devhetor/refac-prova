import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CursoModule } from './cursos/curso.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsuarioModule, CursoModule, MongooseModule.forRoot('mongodb://localhost/prova'), JwtModule],
  providers: [ {
    provide: APP_GUARD,
    useClass: AuthGuard
  }]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
     .apply(LoggerMiddleware)
     .forRoutes({path: 'cursos', method: RequestMethod.POST})
      
  }
}
