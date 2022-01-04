import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SectionModule } from './section/section.module';
import { RequesterModule } from './requester/requester.module';

@Module({
  imports: [SectionModule, RequesterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
