import {
  Bind,
  Controller,
  Get,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerDiskOptions } from 'src/common/multerOptions';
import { Request, Response } from 'express';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('/')
  @UseInterceptors(FilesInterceptor('images', null, multerDiskOptions))
  @Bind(UploadedFiles())
  async uploadImage(
    filesData: Array<Express.Multer.File>,
    @Res() res: Response,
  ) {
    const result = await this.imageService.uploadImage(filesData);
    return res.send(result);
  }

  @Get('/')
  imageTest(@Res() res: Response) {
    return res.send({ message: 'success' });
  }
}
