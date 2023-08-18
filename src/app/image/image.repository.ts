import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { canpro } from 'src/models';

@Injectable()
export class ImageRepository {
  constructor(private readonly sequelize: Sequelize) {}
}
