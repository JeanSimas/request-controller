import { Module } from '@nestjs/common';
import { RequesterService } from './requester.service';
import { RequesterController } from './requester.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RequesterController],
  providers: [RequesterService, PrismaService]
})
export class RequesterModule {}
