import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequesterService } from './requester.service';
import { CreateRequesterDto } from './dto/create-requester.dto';
import { UpdateRequesterDto } from './dto/update-requester.dto';

@Controller('requester')
export class RequesterController {
  constructor(private readonly requesterService: RequesterService) {}

  @Post()
  create(@Body() createRequesterDto: CreateRequesterDto) {
    return this.requesterService.create(createRequesterDto);
  }

  @Get()
  findAll() {
    return this.requesterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requesterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequesterDto: UpdateRequesterDto) {
    return this.requesterService.update(id, updateRequesterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requesterService.remove(id);
  }
}
