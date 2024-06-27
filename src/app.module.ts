import { Get, MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { logger } from './middleware/logger.middleware';
import { UserController } from './user/user.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude({ path: 'userhouse', method: RequestMethod.GET },
        { path: 'userworld', method: RequestMethod.GET }
      )
      .forRoutes(UserController)
  }
}
