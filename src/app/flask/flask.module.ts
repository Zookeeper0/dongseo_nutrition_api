import { Module } from '@nestjs/common';
import { FlaskService } from './flask.service';

@Module({
  controllers: [],
  providers: [FlaskService],
})
export class FlaskModule {}
