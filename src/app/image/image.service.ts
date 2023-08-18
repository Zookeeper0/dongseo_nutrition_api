import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ImageRepository } from './image.repository';
import { canpro, files } from 'src/models';
import { FlaskService } from '../flask/flask.service';
import { async } from 'rxjs';
import { Op } from 'sequelize';

@Injectable()
export class ImageService {
  constructor(
    private readonly seqeulize: Sequelize,
    private readonly imageRepository: ImageRepository,
    private readonly flaskService: FlaskService,
  ) {}

  async uploadImage(filesData: any) {
    const t = await this.seqeulize.transaction();
    try {
      const data = [];
      filesData.forEach((file) => {
        const res = {
          ...file,
        };
        data.push(res);
      });
      const flaskResult = await this.flaskService.sendJpgFile(
        filesData[0].filename,
      );

      flaskResult.forEach(async (item, idx) => {
        const result: any = await canpro.findOne({
          attributes: [
            'food_name',
            'nutr_cont1',
            'nutr_cont2',
            'nutr_cont3',
            'nutr_cont6',
            'nutr_cont9',
          ],
          where: {
            [Op.or]: [
              { foodName: { [Op.substring]: item.name } },
              { foodName: { [Op.like]: item.name } },
            ],
          },
          raw: true,
          transaction: t,
        });

        flaskResult[idx] = { ...item, ...result };
        console.log('result', flaskResult);
        console.log();
      });

      await files.bulkCreate(data, {
        transaction: t,
      });
      await t.commit();
      return flaskResult;
    } catch (error) {
      Logger.error(error);
      await t.rollback();
      throw new HttpException('사진을 인식하지 못했습니다.', 400);
    }
  }
}
