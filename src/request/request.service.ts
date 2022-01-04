import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {

  }
  create(createRequestDto: CreateRequestDto) {
    return this.prisma.request.create({
      data: {
        summary: createRequestDto.summary,
        description: createRequestDto.description,
        priority: createRequestDto.priority,
        status: createRequestDto.status,
        finishedAt: createRequestDto.finishedAt,
        requester: {
          connect: { id: createRequestDto.requester_id }
        }


      }
    })
  }

  findAll() {
    return this.prisma.request.findMany()
  }

  findOne(id: string) {
    return this.prisma.request.findUnique({ where: { id } })
  }

  update(id: string, updateRequestDto: UpdateRequestDto) {
    return this.prisma.request.update({
      where: { id },
      data: {
        summary: updateRequestDto.summary,
        description: updateRequestDto.description,
        priority: updateRequestDto.priority,
        status: updateRequestDto.status,
        finishedAt: updateRequestDto.finishedAt,

      }
    })
  }

  remove(id: string) {
    return this.prisma.request.delete({ where: { id } })
  }
}
