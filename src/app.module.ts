import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SectionModule } from './section/section.module';
import { RequesterModule } from './requester/requester.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [SectionModule, RequesterModule, RequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
