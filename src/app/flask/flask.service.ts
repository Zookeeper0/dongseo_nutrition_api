import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';
import * as FormData from 'form-data';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class FlaskService {
  private readonly flaskServerURL = process.env.FLASK_URL; // Replace with your Flask server URL

  /** 플라스크 서버로 이미지 전송 결과값 리턴 */
  async sendJpgFile(filename: string) {
    try {
      // "uploads" 폴더에 있는 JPG 파일을 읽어오기
      const filePath = `uploads/${filename}`;
      const fileStream: any = fs.createReadStream(filePath);

      // flask api에 이미지 전송하기위해 formdata형식으로 가공
      const formData = new FormData();
      formData.append('file', fileStream, filename);

      // axios를 통해 flask에 post 요청
      const response = await axios.post(this.flaskServerURL, formData, {
        headers: formData.getHeaders(),
      });

      return response.data;
    } catch (error) {
      console.error('Error sending JPG file to Flask server!!:', error);
      throw new HttpException('사진을 인식하지 못했습니다.', 400);
    }
  }
}
