import { Injectable } from '@nestjs/common';
import { CreateBeanDto } from './dto/create-bean.dto';
import { UpdateBeanDto } from './dto/update-bean.dto';
import { Bean } from './entities/bean.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BeansService {
  constructor(
    @InjectRepository(Bean) private beanRepository: Repository<Bean>,
  ) {}

  create(createBeanDto: CreateBeanDto) {
    const bean = new Bean();
    bean.name = createBeanDto.name;
    bean.manufacturer = createBeanDto.manufacturer;
    bean.profile = createBeanDto.profile;
    bean.notes = createBeanDto.notes;
  }

  findAll() {
    return this.beanRepository.find();
  }

  findOne(id: number) {
    return this.beanRepository.findOneBy({ id });
  }

  async update(id: number, updateBeanDto: UpdateBeanDto) {
    const bean = await this.findOne(id);
    bean.name = updateBeanDto.name;
    bean.manufacturer = updateBeanDto.manufacturer;
    bean.profile = updateBeanDto.profile;
    bean.notes = updateBeanDto.notes;

    return this.beanRepository.save(bean);
  }

  remove(id: number) {
    return this.beanRepository.delete(id);
  }
}
