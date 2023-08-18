import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface canproAttributes {
  id?: number;
  userId: string;
  userName?: string;
  sex?: string;
  age?: number;
  date?: string;
  startTime?: string;
  endTime?: string;
  mealGroup?: string;
  foodClassification?: string;
  foodCode?: string;
  foodName?: string;
  ingredientCode?: string;
  ingredientName?: string;
  ingredientAmount?: string;
  nutrCont1?: string;
  nutrCont2?: string;
  nutrCont3?: string;
  nutrCont4?: string;
  nutrCont5?: string;
  nutrCont6?: string;
  nutrCont7?: string;
  nutrCont8?: string;
  nutrCont9?: string;
  nutrCont10?: string;
  nutrCont11?: string;
  nutrCont12?: string;
  nutrCont13?: string;
  nutrCont14?: string;
  nutrCont15?: string;
  nutrCont16?: string;
  nutrCont17?: string;
  nutrCont18?: string;
  nutrCont19?: string;
  nutrCont20?: string;
  nutrCont21?: string;
  nutrCont22?: string;
  nutrCont23?: string;
  nutrCont24?: string;
  nutrCont25?: string;
  nutrCont26?: string;
  nutrCont27?: string;
  nutrCont28?: string;
  nutrCont29?: string;
  nutrCont30?: string;
  nutrCont31?: string;
  nutrCont32?: string;
  nutrCont33?: string;
  nutrCont34?: string;
  nutrCont35?: string;
  nutrCont36?: string;
  nutrCont37?: string;
  nutrCont38?: string;
  nutrCont39?: string;
  nutrCont40?: string;
  nutrCont41?: string;
  nutrCont42?: string;
  nutrCont43?: string;
  nutrCont44?: string;
  nutrCont45?: string;
  nutrCont46?: string;
  nutrCont47?: string;
  nutrCont48?: string;
  nutrCont49?: string;
  nutrCont50?: string;
  nutrCont51?: string;
  nutrCont52?: string;
  nutrCont53?: string;
  nutrCont54?: string;
  nutrCont55?: string;
  nutrCont56?: string;
  nutrCont57?: string;
  nutrCont58?: string;
  nutrCont59?: string;
  nutrCont60?: string;
  nutrCont61?: string;
  nutrCont62?: string;
  nutrCont63?: string;
  nutrCont64?: string;
  nutrCont65?: string;
  nutrCont66?: string;
  nutrCont67?: string;
  nutrCont68?: string;
  nutrCont69?: string;
  nutrCont70?: string;
  nutrCont71?: string;
  nutrCont72?: string;
  nutrCont73?: string;
  nutrCont74?: string;
  nutrCont75?: string;
  nutrCont76?: string;
  nutrCont77?: string;
  nutrCont78?: string;
  nutrCont79?: string;
  nutrCont80?: string;
  nutrCont81?: string;
  nutrCont82?: string;
  nutrCont83?: string;
  nutrCont84?: string;
  nutrCont85?: string;
  nutrCont86?: string;
  nutrCont87?: string;
  nutrCont88?: string;
  nutrCont89?: string;
  nutrCont90?: string;
  nutrCont91?: string;
  nutrCont92?: string;
  nutrCont93?: string;
  nutrCont94?: string;
  nutrCont95?: string;
  nutrCont96?: string;
  nutrCont97?: string;
  nutrCont98?: string;
  nutrCont101?: string;
  nutrCont102?: string;
  nutrCont103?: string;
  nutrCont104?: string;
  nutrCont105?: string;
  nutrCont106?: string;
  nutrCont107?: string;
  nutrCont108?: string;
  nutrCont109?: string;
  nutrCont110?: string;
  regTime?: Date;
  updTime?: Date;
}

@Table({ tableName: 'canpro', timestamps: false, comment: '당부하 검사' })
export class canpro
  extends Model<canproAttributes, canproAttributes>
  implements canproAttributes
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ field: 'user_id', type: DataType.STRING(100), comment: '아이디' })
  userId!: string;

  @Column({
    field: 'user_name',
    allowNull: true,
    type: DataType.STRING(100),
    comment: '사용자명',
  })
  userName?: string;

  @Column({ allowNull: true, type: DataType.CHAR(1), comment: '성별' })
  sex?: string;

  @Column({ allowNull: true, type: DataType.INTEGER, comment: '나이' })
  age?: number;

  @Column({ allowNull: true, type: DataType.STRING(20), comment: '날짜' })
  date?: string;

  @Column({
    field: 'start_time',
    allowNull: true,
    type: DataType.CHAR(5),
    comment: '시작시간',
  })
  startTime?: string;

  @Column({
    field: 'end_time',
    allowNull: true,
    type: DataType.CHAR(5),
    comment: '종료시간',
  })
  endTime?: string;

  @Column({
    field: 'meal_group',
    allowNull: true,
    type: DataType.CHAR(2),
    comment: '식사군',
  })
  mealGroup?: string;

  @Column({
    field: 'food_classification',
    allowNull: true,
    type: DataType.CHAR(2),
    comment: '음식분류',
  })
  foodClassification?: string;

  @Column({
    field: 'food_code',
    allowNull: true,
    type: DataType.STRING(25),
    comment: '음식코드',
  })
  foodCode?: string;

  @Column({
    field: 'food_name',
    allowNull: true,
    type: DataType.STRING(255),
    comment: '음식명',
  })
  foodName?: string;

  @Column({
    field: 'ingredient_code',
    allowNull: true,
    type: DataType.STRING(25),
    comment: '재료코드',
  })
  ingredientCode?: string;

  @Column({
    field: 'ingredient_name',
    allowNull: true,
    type: DataType.STRING(255),
    comment: '재료명',
  })
  ingredientName?: string;

  @Column({
    field: 'ingredient_amount',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '재료량(g)',
  })
  ingredientAmount?: string;

  @Column({
    field: 'nutr_cont1',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '에너지(kcal)',
  })
  nutrCont1?: string;

  @Column({
    field: 'nutr_cont2',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '탄수화물(g)',
  })
  nutrCont2?: string;

  @Column({
    field: 'nutr_cont3',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '지질(g)',
  })
  nutrCont3?: string;

  @Column({
    field: 'nutr_cont4',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '식물성 지질(g)',
  })
  nutrCont4?: string;

  @Column({
    field: 'nutr_cont5',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '동물성 지질(g)',
  })
  nutrCont5?: string;

  @Column({
    field: 'nutr_cont6',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '단백질(g)',
  })
  nutrCont6?: string;

  @Column({
    field: 'nutr_cont7',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '식물성 단백질(g)',
  })
  nutrCont7?: string;

  @Column({
    field: 'nutr_cont8',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '동물성 단백질(g)',
  })
  nutrCont8?: string;

  @Column({
    field: 'nutr_cont9',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '식이섬유(g)',
  })
  nutrCont9?: string;

  @Column({
    field: 'nutr_cont10',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '수용성식이섬유(g)',
  })
  nutrCont10?: string;

  @Column({
    field: 'nutr_cont11',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '불용성식이섬유(g)',
  })
  nutrCont11?: string;

  @Column({
    field: 'nutr_cont12',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '수분(g)',
  })
  nutrCont12?: string;

  @Column({
    field: 'nutr_cont13',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '회분(g)',
  })
  nutrCont13?: string;

  @Column({
    field: 'nutr_cont14',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '비타민 A(ug RAE)',
  })
  nutrCont14?: string;

  @Column({
    field: 'nutr_cont15',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '레티놀(ug)',
  })
  nutrCont15?: string;

  @Column({
    field: 'nutr_cont16',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '베타카로틴(ug)',
  })
  nutrCont16?: string;

  @Column({
    field: 'nutr_cont17',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '비타민 D(ug)',
  })
  nutrCont17?: string;

  @Column({
    field: 'nutr_cont18',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '비타민 E(mg)',
  })
  nutrCont18?: string;

  @Column({
    field: 'nutr_cont19',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '비타민 K(ug)',
  })
  nutrCont19?: string;

  @Column({
    field: 'nutr_cont20',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '비타민 C(mg)',
  })
  nutrCont20?: string;

  @Column({
    field: 'nutr_cont21',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '티아민(mg)',
  })
  nutrCont21?: string;

  @Column({
    field: 'nutr_cont22',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '리보플라빈(mg)',
  })
  nutrCont22?: string;

  @Column({
    field: 'nutr_cont23',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '니아신(mg)',
  })
  nutrCont23?: string;

  @Column({
    field: 'nutr_cont24',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '비타민 B6(mg)',
  })
  nutrCont24?: string;

  @Column({
    field: 'nutr_cont25',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '엽산(ug)',
  })
  nutrCont25?: string;

  @Column({
    field: 'nutr_cont26',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '비타민 B12(ug)',
  })
  nutrCont26?: string;

  @Column({
    field: 'nutr_cont27',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '판토텐산(mg)',
  })
  nutrCont27?: string;

  @Column({
    field: 'nutr_cont28',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '비오틴(ug)',
  })
  nutrCont28?: string;

  @Column({
    field: 'nutr_cont29',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '칼슘(mg)',
  })
  nutrCont29?: string;

  @Column({
    field: 'nutr_cont30',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '식물성 칼슘(mg)',
  })
  nutrCont30?: string;

  @Column({
    field: 'nutr_cont31',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '동물성 칼슘(mg)',
  })
  nutrCont31?: string;

  @Column({
    field: 'nutr_cont32',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '인(mg)',
  })
  nutrCont32?: string;

  @Column({
    field: 'nutr_cont33',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '나트륨(mg)',
  })
  nutrCont33?: string;

  @Column({
    field: 'nutr_cont34',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '염소(mg)',
  })
  nutrCont34?: string;

  @Column({
    field: 'nutr_cont35',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '칼륨(mg)',
  })
  nutrCont35?: string;

  @Column({
    field: 'nutr_cont36',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '마그네슘(mg)',
  })
  nutrCont36?: string;

  @Column({
    field: 'nutr_cont37',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '철(mg)',
  })
  nutrCont37?: string;

  @Column({
    field: 'nutr_cont38',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '식물성 철(mg)',
  })
  nutrCont38?: string;

  @Column({
    field: 'nutr_cont39',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '동물성 철(mg)',
  })
  nutrCont39?: string;

  @Column({
    field: 'nutr_cont40',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '아연(mg)',
  })
  nutrCont40?: string;

  @Column({
    field: 'nutr_cont41',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '구리(ug)',
  })
  nutrCont41?: string;

  @Column({
    field: 'nutr_cont42',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '불소(mg)',
  })
  nutrCont42?: string;

  @Column({
    field: 'nutr_cont43',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '망간(mg)',
  })
  nutrCont43?: string;

  @Column({
    field: 'nutr_cont44',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '요오드(ug)',
  })
  nutrCont44?: string;

  @Column({
    field: 'nutr_cont45',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '셀레늄(ug)',
  })
  nutrCont45?: string;

  @Column({
    field: 'nutr_cont46',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '코발트(ug)',
  })
  nutrCont46?: string;

  @Column({
    field: 'nutr_cont47',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '몰리브덴(ug)',
  })
  nutrCont47?: string;

  @Column({
    field: 'nutr_cont48',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '콜레스테롤(mg)',
  })
  nutrCont48?: string;

  @Column({
    field: 'nutr_cont49',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '총지방산(g)',
  })
  nutrCont49?: string;

  @Column({
    field: 'nutr_cont50',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '포화지방산(g)',
  })
  nutrCont50?: string;

  @Column({
    field: 'nutr_cont51',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '단일불포화지방산(g)',
  })
  nutrCont51?: string;

  @Column({
    field: 'nutr_cont52',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '다불포화지방산(g)',
  })
  nutrCont52?: string;

  @Column({
    field: 'nutr_cont53',
    allowNull: true,
    type: DataType.STRING(10),
    comment: 'n-3계다가불포화지방산(g)',
  })
  nutrCont53?: string;

  @Column({
    field: 'nutr_cont54',
    allowNull: true,
    type: DataType.STRING(10),
    comment: 'n-6계다가불포화지방산(g)',
  })
  nutrCont54?: string;

  @Column({
    field: 'nutr_cont55',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '부티르산4:0(g)',
  })
  nutrCont55?: string;

  @Column({
    field: 'nutr_cont56',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '카프로산6:0(g)',
  })
  nutrCont56?: string;

  @Column({
    field: 'nutr_cont57',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '카프릴산8:0(g)',
  })
  nutrCont57?: string;

  @Column({
    field: 'nutr_cont58',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '카프르산10:0(g)',
  })
  nutrCont58?: string;

  @Column({
    field: 'nutr_cont59',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '데세노산10:1(g)',
  })
  nutrCont59?: string;

  @Column({
    field: 'nutr_cont60',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '라우르산12:0(g)',
  })
  nutrCont60?: string;

  @Column({
    field: 'nutr_cont61',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '미리스트산14:0(g)',
  })
  nutrCont61?: string;

  @Column({
    field: 'nutr_cont62',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '미리스톨레산14:1(g)',
  })
  nutrCont62?: string;

  @Column({
    field: 'nutr_cont63',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '팔미트산16:0(g)',
  })
  nutrCont63?: string;

  @Column({
    field: 'nutr_cont64',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '팔리톨레산16:1(g)',
  })
  nutrCont64?: string;

  @Column({
    field: 'nutr_cont65',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '스테아르산18:0(g)',
  })
  nutrCont65?: string;

  @Column({
    field: 'nutr_cont66',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '올레산18:1(g)',
  })
  nutrCont66?: string;

  @Column({
    field: 'nutr_cont67',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '리놀레산18:2(n-6)(g)',
  })
  nutrCont67?: string;

  @Column({
    field: 'nutr_cont68',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '리놀렌산18:3(n-3)(g)',
  })
  nutrCont68?: string;

  @Column({
    field: 'nutr_cont69',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '감마리놀렌산(g)',
  })
  nutrCont69?: string;

  @Column({
    field: 'nutr_cont70',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '스테아리돈산18:4(n-3)(g)',
  })
  nutrCont70?: string;

  @Column({
    field: 'nutr_cont71',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '아라키드산20:0(g)',
  })
  nutrCont71?: string;

  @Column({
    field: 'nutr_cont72',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '에이코세노산20:1(g)',
  })
  nutrCont72?: string;

  @Column({
    field: 'nutr_cont73',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '에이코사디에노산20:2(n-6)(g)',
  })
  nutrCont73?: string;

  @Column({
    field: 'nutr_cont74',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '에이코사트리엔산20:3(n-3)(g)',
  })
  nutrCont74?: string;

  @Column({
    field: 'nutr_cont75',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '에이코사트리에노산20:3(n-6)(g)',
  })
  nutrCont75?: string;

  @Column({
    field: 'nutr_cont76',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '에이코사테르라에노산20:4(n-3)(g)',
  })
  nutrCont76?: string;

  @Column({
    field: 'nutr_cont77',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '아라키돈산20:4(n-6)(g)',
  })
  nutrCont77?: string;

  @Column({
    field: 'nutr_cont78',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '에이코펜타에노산20:5(n-3)(g)',
  })
  nutrCont78?: string;

  @Column({
    field: 'nutr_cont79',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '베헨산22:0(g)',
  })
  nutrCont79?: string;

  @Column({
    field: 'nutr_cont80',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '도코세노산22:1(g)',
  })
  nutrCont80?: string;

  @Column({
    field: 'nutr_cont81',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '도코사디엔산(g)',
  })
  nutrCont81?: string;

  @Column({
    field: 'nutr_cont82',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '도코사펜타에노산22:5(n-3)(g)',
  })
  nutrCont82?: string;

  @Column({
    field: 'nutr_cont83',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '도코사펜타에노산22:5(n-6)(g)',
  })
  nutrCont83?: string;

  @Column({
    field: 'nutr_cont84',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '도코사헥사에노산22:6(n-3)(g)',
  })
  nutrCont84?: string;

  @Column({
    field: 'nutr_cont85',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '리그노세르산24:0(g)',
  })
  nutrCont85?: string;

  @Column({
    field: 'nutr_cont86',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '테트라코세노산24:1(g)',
  })
  nutrCont86?: string;

  @Column({
    field: 'nutr_cont87',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '기타지방산(g)',
  })
  nutrCont87?: string;

  @Column({
    field: 'nutr_cont88',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '이소루신(mg)',
  })
  nutrCont88?: string;

  @Column({
    field: 'nutr_cont89',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '루신(mg)',
  })
  nutrCont89?: string;

  @Column({
    field: 'nutr_cont90',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '라이신(mg)',
  })
  nutrCont90?: string;

  @Column({
    field: 'nutr_cont91',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '메티오닌(mg)',
  })
  nutrCont91?: string;

  @Column({
    field: 'nutr_cont92',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '시스테인(mg)',
  })
  nutrCont92?: string;

  @Column({
    field: 'nutr_cont93',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '함황 아미노산(mg)',
  })
  nutrCont93?: string;

  @Column({
    field: 'nutr_cont94',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '페닐알라닌(mg)',
  })
  nutrCont94?: string;

  @Column({
    field: 'nutr_cont95',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '티로신(mg)',
  })
  nutrCont95?: string;

  @Column({
    field: 'nutr_cont96',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '방향족 아미노산(mg)',
  })
  nutrCont96?: string;

  @Column({
    field: 'nutr_cont97',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '트레오닌(mg)',
  })
  nutrCont97?: string;

  @Column({
    field: 'nutr_cont98',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '트립토판(mg)',
  })
  nutrCont98?: string;

  @Column({
    field: 'nutr_cont101',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '발린(mg)',
  })
  nutrCont101?: string;

  @Column({
    field: 'nutr_cont102',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '히스티딘(mg)',
  })
  nutrCont102?: string;

  @Column({
    field: 'nutr_cont103',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '아르기닌(mg)',
  })
  nutrCont103?: string;

  @Column({
    field: 'nutr_cont104',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '알라닌(mg)',
  })
  nutrCont104?: string;

  @Column({
    field: 'nutr_cont105',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '아스파르트산(mg)',
  })
  nutrCont105?: string;

  @Column({
    field: 'nutr_cont106',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '글루탐산(mg)',
  })
  nutrCont106?: string;

  @Column({
    field: 'nutr_cont107',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '글리신(mg)',
  })
  nutrCont107?: string;

  @Column({
    field: 'nutr_cont108',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '프롤린(mg)',
  })
  nutrCont108?: string;

  @Column({
    field: 'nutr_cont109',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '세린(mg)',
  })
  nutrCont109?: string;

  @Column({
    field: 'nutr_cont110',
    allowNull: true,
    type: DataType.STRING(10),
    comment: '타우린(mg)',
  })
  nutrCont110?: string;

  @Column({
    field: 'reg_time',
    allowNull: true,
    type: DataType.DATE,
    comment: '등록시간',
    defaultValue: DataType.NOW,
  })
  regTime?: Date;

  @Column({
    field: 'upd_time',
    allowNull: true,
    type: DataType.DATE,
    comment: '수정시간',
  })
  updTime?: Date;
}
