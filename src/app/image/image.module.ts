import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { ImageRepository } from './image.repository';
import { FlaskService } from '../flask/flask.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { canpro, files } from 'src/models';

@Module({
  imports: [SequelizeModule.forFeature([canpro, files])],
  controllers: [ImageController],
  providers: [ImageService, ImageRepository, FlaskService],
})
export class ImageModule {}
