import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface filesAttributes {
  id?: number;
  usersId?: string;
  fieldname?: string;
  originalname?: string;
  path?: string;
  controlName?: string;
  size?: number;
  encoding?: string;
  mimetype?: string;
  destination?: string;
  filename?: string;
  createUserId?: number;
  createIp?: string;
  updateUserId?: number;
  updateIp?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'files', timestamps: false, comment: '파일' })
export class files
  extends Model<filesAttributes, filesAttributes>
  implements filesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    comment: '키',
  })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({
    field: 'users_id',
    allowNull: true,
    type: DataType.STRING(100),
    comment: '파일 관리 연결 키값',
  })
  usersId?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(100),
    comment: '파일 필드 이름',
  })
  fieldname?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(100),
    comment: '원본파일명',
  })
  originalname?: string;

  @Column({ allowNull: true, type: DataType.STRING(200), comment: '파일위치' })
  path?: string;

  @Column({
    field: 'control_name',
    allowNull: true,
    type: DataType.STRING(100),
    comment: '컨트롤명(기사, 컨테이너, 컨테이너 데미지)',
  })
  controlName?: string;

  @Column({ allowNull: true, type: DataType.INTEGER, comment: '파일크기' })
  size?: number;

  @Column({ allowNull: true, type: DataType.STRING(100), comment: '인코딩' })
  encoding?: string;

  @Column({ allowNull: true, type: DataType.STRING(100), comment: '마임타입' })
  mimetype?: string;

  @Column({ allowNull: true, type: DataType.STRING(200), comment: '저장위치' })
  destination?: string;

  @Column({ allowNull: true, type: DataType.STRING(100), comment: '파일명' })
  filename?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment: '등록자 아이디(사용자)',
  })
  createUserId?: number;

  @Column({
    field: 'createIP',
    allowNull: true,
    type: DataType.STRING(100),
    comment: '등록자 IP',
  })
  createIp?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment: '수정자 아이디(사용자)',
  })
  updateUserId?: number;

  @Column({
    field: 'updateIP',
    allowNull: true,
    type: DataType.STRING(100),
    comment: '수정자 IP',
  })
  updateIp?: string;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    comment: '등록일시',
    defaultValue: DataType.NOW,
  })
  createdAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    comment: '수정일시',
    defaultValue: DataType.NOW,
  })
  updatedAt?: Date;
}
