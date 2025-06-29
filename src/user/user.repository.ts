import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  create(data: Partial<User>): User {
    return this.repo.create(data);
  }

  save(user: User): Promise<User> {
    return this.repo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  async findById(id: number): Promise<User> {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User không tồn tại');
    }
    return user;
  }

  async remove(user: User): Promise<void> {
    await this.repo.remove(user);
  }

  merge(user: User, data: Partial<User>): User {
    return this.repo.merge(user, data);
  }
}
