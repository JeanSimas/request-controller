import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionService {
  constructor(private readonly prisma: PrismaService) { }

  create(createSectionDto: CreateSectionDto) {
    return this.prisma.section.create({
      data: {
        name: createSectionDto.name
      }
    })
  }

  findAll() {
    return this.prisma.section.findMany()
  }

  findOne(id: string) {
    return this.prisma.section.findUnique({
      where: { id }
    })
  }

  update(id: string, updateSectionDto: UpdateSectionDto) {
    return this.prisma.section.update({
      where: { id }, data: {
        name: updateSectionDto.name
      }
    });
  }

  remove(id: string) {
    return this.prisma.section.delete({ where: { id } });
  }
}
