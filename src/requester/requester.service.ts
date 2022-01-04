import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRequesterDto } from './dto/create-requester.dto';
import { UpdateRequesterDto } from './dto/update-requester.dto';

@Injectable()
export class RequesterService {
  constructor(private readonly prisma: PrismaService) { }
  create(createRequesterDto: CreateRequesterDto) {
    return this.prisma.requester.create({
      data: {
        name: createRequesterDto.name,
        registration: createRequesterDto.registration,
        section: {
          connect: {
            id: createRequesterDto.section_id
          }
        }
      }
    });
  }

  findAll() {
    return this.prisma.requester.findMany();
  }

  findOne(id: string) {
    return this.prisma.requester.findUnique({
      where: {id}
    });
  }

  update(id: string, updateRequesterDto: UpdateRequesterDto) {
    return this.prisma.requester.update({
      where: {id},
      data: {
        name: updateRequesterDto.name,
        registration: updateRequesterDto.registration,
        sectionId: updateRequesterDto.section_id
      }
    });
  }

  remove(id: string) {
    return this.prisma.requester.delete({
      where: {id}
    });
  }
}
