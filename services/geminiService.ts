
import { FoodRecommendation, WeatherData } from "../types";

// Helper interface for local data
interface LocalDish extends Omit<FoodRecommendation, 'id'> {
  id?: string;
  tags: string[];
}

const LOCAL_DATABASE: LocalDish[] = [
  // --- 京城烤鸭/老字号 (Traditional/Duck) ---
  {
    dishName: "四季民福·烤鸭",
    shortDescription: "服务好，鸭皮酥脆，故宫景观位。",
    reasoning: "北京烤鸭界的顶流，鸭皮蘸糖入口即化，就在故宫边上，吃的是个氛围。",
    restaurantType: "品质京菜",
    estimatedPrice: "150-200 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 60, sour: 0, greasy: 80 },
    tags: ['traditional', 'luxury', 'heavy', 'hot'] 
  },
  {
    dishName: "便宜坊·焖炉烤鸭",
    shortDescription: "600年历史，焖炉不见火，肉嫩。",
    reasoning: "焖炉烤鸭更锁汁，吃起来不燥，老字号的底蕴。",
    restaurantType: "老字号",
    estimatedPrice: "120-180 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 50, sour: 0, greasy: 70 },
    tags: ['traditional', 'luxury', 'heavy', 'hot']
  },
  {
    dishName: "大董烤鸭 (DaDong)",
    shortDescription: "酥不腻烤鸭，意境菜，商务宴请。",
    reasoning: "烤鸭界的爱马仕，皮极其酥脆，摆盘讲究，适合大餐。",
    restaurantType: "创意京菜",
    estimatedPrice: "300-500 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 40, sour: 0, greasy: 60 },
    tags: ['luxury', 'heavy', 'traditional']
  },
  {
    dishName: "全聚德·挂炉烤鸭",
    shortDescription: "中华第一吃，名气最大。",
    reasoning: "虽然争议多，但毕竟是烤鸭代名词，带外地朋友去还是有面子。",
    restaurantType: "老字号",
    estimatedPrice: "200-300 RMB",
    calories: "550 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 40, sour: 0, greasy: 80 },
    tags: ['traditional', 'luxury', 'heavy']
  },
  {
    dishName: "利群烤鸭",
    shortDescription: "前门四合院，烟火气十足。",
    reasoning: "藏在胡同里的老味道，很多明星去过，鸭皮偏硬脆。",
    restaurantType: "胡同老店",
    estimatedPrice: "150-200 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 70, sour: 0, greasy: 80 },
    tags: ['traditional', 'heavy']
  },
  {
    dishName: "提督·TIDU",
    shortDescription: "新派京菜，五味三吃烤鸭。",
    reasoning: "环境非常摩登，烤鸭做法创新，适合年轻人约会。",
    restaurantType: "新京菜",
    estimatedPrice: "200-300 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 20, salty: 50, sweet: 50, sour: 10, greasy: 60 },
    tags: ['luxury', 'heavy', 'hot']
  },

  // --- 铜锅涮肉/火锅 (Hotpot) ---
  {
    dishName: "聚宝源·铜锅涮肉",
    shortDescription: "牛街排队王，手切羊肉一绝。",
    reasoning: "来北京必吃的涮肉，手切鲜羊肉立盘不倒，烧饼也是必点。",
    restaurantType: "清真老字号",
    estimatedPrice: "100-150 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 10, salty: 60, sweet: 20, sour: 0, greasy: 50 },
    tags: ['traditional', 'hot', 'heavy', 'luxury']
  },
  {
    dishName: "南门涮肉",
    shortDescription: "景泰蓝小锅，麻酱画笑脸。",
    reasoning: "环境好，肉质稳，特别是那一碗笑脸麻酱，看着就开心。",
    restaurantType: "老北京涮肉",
    estimatedPrice: "100-150 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 30, sour: 0, greasy: 50 },
    tags: ['traditional', 'hot', 'heavy']
  },
  {
    dishName: "满恒记",
    shortDescription: "平安里神店，麻酱糖饼是灵魂。",
    reasoning: "除了涮肉，他家的麻酱糖饼简直是碳水炸弹，太香了。",
    restaurantType: "清真火锅",
    estimatedPrice: "100-130 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 80, sour: 0, greasy: 70 },
    tags: ['traditional', 'hot', 'heavy', 'snack']
  },
  {
    dishName: "东来顺",
    shortDescription: "百年老字号，铜锅涮肉鼻祖。",
    reasoning: "名气最大，肉质中规中矩，吃的是个金字招牌。",
    restaurantType: "老字号",
    estimatedPrice: "150-200 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 20, sour: 0, greasy: 40 },
    tags: ['traditional', 'hot', 'heavy']
  },
  {
    dishName: "海底捞火锅",
    shortDescription: "服务天花板，番茄汤好喝。",
    reasoning: "半夜想吃火锅？去海底捞吧。不知道去哪？去海底捞吧。",
    restaurantType: "火锅",
    estimatedPrice: "100-200 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 40, salty: 60, sweet: 20, sour: 10, greasy: 60 },
    tags: ['hot', 'heavy', 'luxury', 'late_night']
  },
  {
    dishName: "呷哺呷哺",
    shortDescription: "一人一锅，性价比之王。",
    reasoning: "快餐式火锅，麻酱调料是灵魂，几十块钱吃得饱饱的。",
    restaurantType: "快餐火锅",
    estimatedPrice: "50-80 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 30, salty: 60, sweet: 20, sour: 0, greasy: 50 },
    tags: ['fast', 'hot', 'heavy', 'cheap']
  },
  {
    dishName: "小龙坎老火锅",
    shortDescription: "川式牛油，辣得过瘾。",
    reasoning: "想吃正宗辣锅就来这，鸭肠毛肚七上八下，爽翻天。",
    restaurantType: "川式火锅",
    estimatedPrice: "120-160 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 90, salty: 80, sweet: 10, sour: 0, greasy: 90 },
    tags: ['spicy', 'hot', 'heavy']
  },
  {
    dishName: "巴奴毛肚火锅",
    shortDescription: "毛肚专门店，菌汤鲜美。",
    reasoning: "服务不输海底捞，产品主义，毛肚和野山菌汤真的绝。",
    restaurantType: "品质火锅",
    estimatedPrice: "150-200 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 50, salty: 60, sweet: 10, sour: 0, greasy: 50 },
    tags: ['hot', 'heavy', 'luxury']
  },

  // --- 炙子烤肉/烧烤 (BBQ) ---
  {
    dishName: "烤肉季",
    shortDescription: "什刹海边，武吃烤肉。",
    reasoning: "南宛北季，风景好，肉腌得入味，大口吃肉的感觉非常爽。",
    restaurantType: "老字号",
    estimatedPrice: "100-150 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 20, salty: 80, sweet: 30, sour: 0, greasy: 80 },
    tags: ['traditional', 'heavy', 'hot']
  },
  {
    dishName: "烤肉宛",
    shortDescription: "南城老字号，牛肉鲜嫩。",
    reasoning: "肉嫩得像豆腐，芫爆散丹也是一绝。",
    restaurantType: "老字号",
    estimatedPrice: "100-150 RMB",
    calories: "650 kcal",
    flavorProfile: { spicy: 10, salty: 70, sweet: 20, sour: 0, greasy: 70 },
    tags: ['traditional', 'heavy', 'hot']
  },
  {
    dishName: "厚味居·炙子烤肉",
    shortDescription: "南城老店，大板凳，烟火气。",
    reasoning: "地道的南城味道，牛肉和酸菜一起烤，解腻又过瘾。",
    restaurantType: "老北京烤肉",
    estimatedPrice: "80-120 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 30, salty: 80, sweet: 10, sour: 20, greasy: 90 },
    tags: ['traditional', 'heavy', 'hot', 'late_night']
  },
  {
    dishName: "刘小串·车库里的串",
    shortDescription: "以前在车库里，小串入味。",
    reasoning: "吃的就是那个情怀和小串的焦香，下酒神器。",
    restaurantType: "烧烤",
    estimatedPrice: "80-100 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 60, salty: 80, sweet: 10, sour: 0, greasy: 70 },
    tags: ['late_night', 'heavy', 'spicy', 'snack']
  },
  {
    dishName: "丰茂烤串",
    shortDescription: "延边风味，自动旋转烤架。",
    reasoning: "不用自己动手翻面，蘸料丰富，现切羊肉很好吃。",
    restaurantType: "韩式/延边烧烤",
    estimatedPrice: "100-130 RMB",
    calories: "650 kcal",
    flavorProfile: { spicy: 40, salty: 70, sweet: 20, sour: 0, greasy: 60 },
    tags: ['hot', 'heavy', 'late_night']
  },
  {
    dishName: "木屋烧烤",
    shortDescription: "连锁店多，生蚝半价。",
    reasoning: "品质稳定的连锁烧烤，生蚝和烤韭菜是必点。",
    restaurantType: "连锁烧烤",
    estimatedPrice: "80-100 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 50, salty: 80, sweet: 10, sour: 0, greasy: 70 },
    tags: ['late_night', 'heavy', 'spicy']
  },
  {
    dishName: "管氏翅吧",
    shortDescription: "变态辣鸡翅，烤馒头片。",
    reasoning: "曾经的网红，鸡翅味道确实好，适合朋友聚餐撸串。",
    restaurantType: "烧烤",
    estimatedPrice: "70-90 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 80, salty: 70, sweet: 30, sour: 0, greasy: 60 },
    tags: ['late_night', 'heavy', 'spicy']
  },

  // --- 面条/主食 (Noodles/Rice) ---
  {
    dishName: "方砖厂69号炸酱面",
    shortDescription: "网红店，只卖炸酱面。",
    reasoning: "专注于一碗面，酱香浓郁，腊八蒜随便吃。",
    restaurantType: "胡同面馆",
    estimatedPrice: "25-30 RMB",
    calories: "550 kcal",
    flavorProfile: { spicy: 0, salty: 90, sweet: 20, sour: 10, greasy: 50 },
    tags: ['traditional', 'noodle', 'cheap', 'fast']
  },
  {
    dishName: "海碗居",
    shortDescription: "小二吆喝，地道炸酱面。",
    reasoning: "进门就是“来了您呐”，菜码齐全，面条劲道。",
    restaurantType: "老北京菜",
    estimatedPrice: "50-80 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 80, sweet: 20, sour: 0, greasy: 50 },
    tags: ['traditional', 'noodle', 'heavy']
  },
  {
    dishName: "宇飞牛肉面",
    shortDescription: "垂杨柳神店，汤浓肉大。",
    reasoning: "没有服务，环境一般，但那口汤是真的香，重口味必选。",
    restaurantType: "苍蝇馆子",
    estimatedPrice: "30-40 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 20, salty: 80, sweet: 0, sour: 0, greasy: 60 },
    tags: ['noodle', 'cheap', 'heavy', 'hot']
  },
  {
    dishName: "新川面馆",
    shortDescription: "麻酱凉面配肘子，夏日标配。",
    reasoning: "虽然是凉面，但麻酱醇厚，配上酱肘子，绝对是重口味的满足。",
    restaurantType: "老字号",
    estimatedPrice: "25-40 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 10, salty: 60, sweet: 30, sour: 40, greasy: 60 },
    tags: ['noodle', 'cold', 'heavy', 'cheap', 'fast']
  },
  {
    dishName: "柴氏风味斋",
    shortDescription: "牛肉面配酱牛肉，清真老店。",
    reasoning: "汤头虽然清亮但味道浓郁，牛肉炖得软烂入味。",
    restaurantType: "清真面馆",
    estimatedPrice: "40-60 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 10, salty: 70, sweet: 0, sour: 0, greasy: 40 },
    tags: ['noodle', 'traditional', 'hot']
  },
  {
    dishName: "张拉拉/陈香贵",
    shortDescription: "免费续面，羊肉串很香。",
    reasoning: "新式兰州拉面，环境好，面条劲道，能吃饱。",
    restaurantType: "新式面馆",
    estimatedPrice: "30-40 RMB",
    calories: "550 kcal",
    flavorProfile: { spicy: 40, salty: 60, sweet: 0, sour: 10, greasy: 40 },
    tags: ['noodle', 'fast', 'hot', 'cheap']
  },
  {
    dishName: "李先生牛肉面",
    shortDescription: "火车站的回忆，味道稳定。",
    reasoning: "加州牛肉面大王，虽然不高端，但那熟悉的味道有时候就是想吃。",
    restaurantType: "快餐面馆",
    estimatedPrice: "30-40 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 10, salty: 70, sweet: 10, sour: 0, greasy: 40 },
    tags: ['noodle', 'fast', 'cheap', 'hot']
  },
  {
    dishName: "马兰拉面",
    shortDescription: "经典兰州拉面，汤清面黄。",
    reasoning: "一代人的记忆，简简单单的一碗面，快速解决战斗。",
    restaurantType: "快餐面馆",
    estimatedPrice: "20-30 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 20, salty: 60, sweet: 0, sour: 0, greasy: 30 },
    tags: ['noodle', 'fast', 'cheap', 'hot', 'light']
  },
  {
    dishName: "西部马华",
    shortDescription: "24小时营业，拉面和盘餐。",
    reasoning: "深夜不知道吃啥就去这，大盘鸡拌面也是一绝。",
    restaurantType: "清真快餐",
    estimatedPrice: "30-50 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 30, salty: 60, sweet: 10, sour: 10, greasy: 50 },
    tags: ['noodle', 'fast', 'rice', 'hot', 'late_night']
  },
  {
    dishName: "和府捞面",
    shortDescription: "书房里吃面，草本汤底。",
    reasoning: "环境文艺，汤底比较浓郁，还可以免费续面。",
    restaurantType: "品质面馆",
    estimatedPrice: "40-60 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 20, salty: 50, sweet: 10, sour: 0, greasy: 40 },
    tags: ['noodle', 'hot', 'fast']
  },
  {
    dishName: "晋阳饭庄·刀削面",
    shortDescription: "山西风味老字号，香酥鸭。",
    reasoning: "刀削面一绝，配上他们家的过油肉或者香酥鸭，完美。",
    restaurantType: "老字号",
    estimatedPrice: "80-120 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 70, sweet: 20, sour: 40, greasy: 60 },
    tags: ['traditional', 'noodle', 'heavy']
  },
  {
    dishName: "延吉餐厅·冷面",
    shortDescription: "西四老店，酸甜口大冷面。",
    reasoning: "北京第一家冷面，酸甜冰爽，配上辣肉，夏天吃简直救命。",
    restaurantType: "老字号",
    estimatedPrice: "30-50 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 30, salty: 40, sweet: 80, sour: 80, greasy: 20 },
    tags: ['noodle', 'cold', 'cheap', 'traditional']
  },

  // --- 饺子/包子 (Dumplings/Buns) ---
  {
    dishName: "庆丰包子铺",
    shortDescription: "猪肉大葱包子，炒肝。",
    reasoning: "主席套餐吃一套？虽然是快餐，但刚出锅的包子确实香。",
    restaurantType: "老字号快餐",
    estimatedPrice: "20-30 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 10, sour: 20, greasy: 40 },
    tags: ['fast', 'cheap', 'traditional', 'snack']
  },
  {
    dishName: "东方饺子王",
    shortDescription: "现包现煮，三鲜水饺。",
    reasoning: "饺子皮薄馅大，干净卫生，不知道吃啥吃饺子总没错。",
    restaurantType: "快餐连锁",
    estimatedPrice: "40-60 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 10, sour: 30, greasy: 30 },
    tags: ['fast', 'traditional', 'light']
  },
  {
    dishName: "馅老满",
    shortDescription: "馅大汤多，老北京风味。",
    reasoning: "真正的皮薄馅大，一口下去全是汤汁，炸灌肠也做得不错。",
    restaurantType: "家常菜",
    estimatedPrice: "60-80 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 10, sour: 20, greasy: 50 },
    tags: ['traditional', 'heavy', 'family']
  },
  {
    dishName: "西四包子铺",
    shortDescription: "排队老店，肉丁包子。",
    reasoning: "由于太火总排队，但那一口爆汁的肉丁包子确实值得。",
    restaurantType: "老字号",
    estimatedPrice: "30-40 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 20, sour: 0, greasy: 60 },
    tags: ['traditional', 'snack', 'heavy']
  },

  // --- 异国料理 (International) ---
  {
    dishName: "Annie's 安妮意大利餐厅",
    shortDescription: "性价比之王，服务超好。",
    reasoning: "北京意餐的良心，服务亲切，餐前面包和千层面是必点。",
    restaurantType: "品质西餐",
    estimatedPrice: "100-150 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 20, sour: 20, greasy: 60 },
    tags: ['luxury', 'heavy', 'family']
  },
  {
    dishName: "站点比萨 (Tube Station)",
    shortDescription: "巨型披萨，垃圾桶比萨。",
    reasoning: "最大的披萨能当桌布，适合多人聚会，芝士量足。",
    restaurantType: "美式披萨",
    estimatedPrice: "80-120 RMB",
    calories: "900 kcal",
    flavorProfile: { spicy: 10, salty: 70, sweet: 20, sour: 10, greasy: 80 },
    tags: ['fast', 'heavy', 'family']
  },
  {
    dishName: "蓝蛙 (Blue Frog)",
    shortDescription: "美式汉堡，Happy Hour。",
    reasoning: "汉堡肉汁丰富，周一汉堡买一送一的时候去最划算。",
    restaurantType: "美式西餐",
    estimatedPrice: "120-180 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 20, sour: 10, greasy: 70 },
    tags: ['luxury', 'heavy']
  },
  {
    dishName: "萨莉亚 (Saizeriya)",
    shortDescription: "意大利沙县，极致便宜。",
    reasoning: "价格低到让你怀疑人生，味道居然还不错，学生党和省钱党的天堂。",
    restaurantType: "平价西餐",
    estimatedPrice: "30-50 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 20, sour: 20, greasy: 50 },
    tags: ['fast', 'cheap', 'heavy']
  },
  {
    dishName: "基辅罗斯餐厅",
    shortDescription: "苏联老歌，罐焖牛肉。",
    reasoning: "复古氛围，演员表演很专业，红菜汤和奶油烤杂拌很地道。",
    restaurantType: "俄式西餐",
    estimatedPrice: "150-200 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 50, sour: 40, greasy: 60 },
    tags: ['luxury', 'heavy']
  },
  {
    dishName: "老井俄式餐厅",
    shortDescription: "东直门使馆区，量大实惠。",
    reasoning: "比基辅罗斯便宜，味道也很正，大列巴配黄油太香了。",
    restaurantType: "俄式西餐",
    estimatedPrice: "100-150 RMB",
    calories: "750 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 40, sour: 30, greasy: 70 },
    tags: ['heavy', 'luxury']
  },
  {
    dishName: "达美乐比萨",
    shortDescription: "30分钟必达，土豆泥培根。",
    reasoning: "外卖首选，各种卷边很罪恶，但是真的好吃。",
    restaurantType: "比萨外送",
    estimatedPrice: "40-70 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 30, sour: 10, greasy: 60 },
    tags: ['fast', 'heavy']
  },
  {
    dishName: "必胜客 (Pizza Hut)",
    shortDescription: "铁盘比萨，自助沙拉（已无）。",
    reasoning: "虽然没有以前那么火，但榴莲比萨和下午茶还是不错的。",
    restaurantType: "比萨连锁",
    estimatedPrice: "60-100 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 30, sour: 10, greasy: 60 },
    tags: ['fast', 'heavy', 'family']
  },

  // --- 日韩料理 (Japanese/Korean) ---
  {
    dishName: "吉野家 (Yoshinoya)",
    shortDescription: "招牌牛肉饭，快速解决。",
    reasoning: "打工人的食堂，牛肉饭加个温泉蛋，简单满足。",
    restaurantType: "日式快餐",
    estimatedPrice: "30-40 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 30, sour: 0, greasy: 40 },
    tags: ['fast', 'cheap', 'rice']
  },
  {
    dishName: "松鹤楼·苏式汤面",
    shortDescription: "虽然是苏式，但很精致。",
    reasoning: "乱入一个，但也算特色。红汤面甜津津，秃黄油拌面很奢华。",
    restaurantType: "苏式面馆",
    estimatedPrice: "60-100 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 60, sour: 10, greasy: 40 },
    tags: ['light', 'noodle', 'luxury']
  },
  {
    dishName: "一风堂/博多一幸舍",
    shortDescription: "浓郁豚骨拉面。",
    reasoning: "汤头浓郁到粘嘴，溏心蛋是标配，替玉（加面）不要停。",
    restaurantType: "日式拉面",
    estimatedPrice: "50-70 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 10, salty: 70, sweet: 10, sour: 0, greasy: 60 },
    tags: ['noodle', 'hot', 'heavy']
  },
  {
    dishName: "将太无二",
    shortDescription: "创意寿司，CBD卷。",
    reasoning: "改良版日料，由于是熟食多，更能适应中国胃，CBD卷经典。",
    restaurantType: "日式料理",
    estimatedPrice: "100-150 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 10, salty: 40, sweet: 40, sour: 20, greasy: 40 },
    tags: ['light', 'cold', 'luxury']
  },
  {
    dishName: "火炉火",
    shortDescription: "韩式烤肉，南瓜粥好喝。",
    reasoning: "免费的南瓜粥简直是本体，烤肉有人帮烤，芝士排骨热量爆炸。",
    restaurantType: "韩式料理",
    estimatedPrice: "100-130 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 30, salty: 60, sweet: 50, sour: 20, greasy: 70 },
    tags: ['heavy', 'hot', 'luxury']
  },
  {
    dishName: "村上一屋",
    shortDescription: "性价比日料，芒果大虾卷。",
    reasoning: "便宜大碗，环境温馨，适合学生党和随便吃吃。",
    restaurantType: "日式简餐",
    estimatedPrice: "50-80 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 40, sour: 20, greasy: 40 },
    tags: ['light', 'cheap']
  },

  // --- 驻京办/地方菜 (Regional) ---
  {
    dishName: "老川办餐厅",
    shortDescription: "建国门，最正宗的川菜。",
    reasoning: "依然是北京川菜的标杆，毛血旺用料扎实，辣得过瘾。",
    restaurantType: "驻京办",
    estimatedPrice: "80-120 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 90, salty: 80, sweet: 10, sour: 10, greasy: 90 },
    tags: ['spicy', 'heavy', 'hot', 'rice']
  },
  {
    dishName: "宜宾驻京办",
    shortDescription: "燃面，李庄白肉。",
    reasoning: "燃面地道，白肉切得薄如蝉翼，蘸着蒜泥红油吃绝了。",
    restaurantType: "驻京办",
    estimatedPrice: "80-120 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 80, salty: 60, sweet: 10, sour: 10, greasy: 60 },
    tags: ['spicy', 'heavy', 'hot', 'noodle']
  },
  {
    dishName: "新新湘菜馆",
    shortDescription: "剁椒鱼头，老字号湘菜。",
    reasoning: "剁椒鱼头非常大，面条拌进去吸满汤汁，辣得冒汗。",
    restaurantType: "湘菜",
    estimatedPrice: "70-100 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 90, salty: 90, sweet: 0, sour: 20, greasy: 60 },
    tags: ['spicy', 'heavy', 'hot', 'rice']
  },
  {
    dishName: "潇湘阁",
    shortDescription: "排队王，金钱蛋。",
    reasoning: "被称为北京湘菜界的“排队王”，金钱蛋和小炒黄牛肉巨下饭。",
    restaurantType: "湘菜小馆",
    estimatedPrice: "60-80 RMB",
    calories: "650 kcal",
    flavorProfile: { spicy: 90, salty: 80, sweet: 0, sour: 10, greasy: 70 },
    tags: ['spicy', 'heavy', 'rice', 'cheap']
  },
  {
    dishName: "哈尔滨驻京办·京滨饭店",
    shortDescription: "锅包肉，大拉皮。",
    reasoning: "量大实惠，正宗东北味，锅包肉是老式的糖醋口。",
    restaurantType: "驻京办/东北菜",
    estimatedPrice: "60-90 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 70, sour: 50, greasy: 60 },
    tags: ['heavy', 'cheap', 'rice']
  },
  {
    dishName: "那家小馆",
    shortDescription: "满族宫廷菜，皇坛子。",
    reasoning: "环境古色古香，皇坛子拌饭很香，酥皮虾也是招牌。",
    restaurantType: "宫廷菜",
    estimatedPrice: "150-200 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 50, sour: 10, greasy: 50 },
    tags: ['luxury', 'traditional', 'heavy']
  },
  {
    dishName: "云海肴",
    shortDescription: "汽锅鸡，黑糖豆花。",
    reasoning: "云南菜比较清淡健康，汽锅鸡汤不加一滴水，很鲜。",
    restaurantType: "云南菜",
    estimatedPrice: "80-120 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 30, salty: 40, sweet: 20, sour: 30, greasy: 20 },
    tags: ['light', 'rice']
  },
  {
    dishName: "南京大牌档",
    shortDescription: "美龄粥，烤鸭包。",
    reasoning: "听着评弹吃着饭，美龄粥甜而不腻，非常有江南特色。",
    restaurantType: "江浙菜",
    estimatedPrice: "60-90 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 70, sour: 10, greasy: 30 },
    tags: ['light', 'snack', 'sweet', 'cheap']
  },
  {
    dishName: "西贝莜面村",
    shortDescription: "牛大骨，莜面鱼鱼。",
    reasoning: "闭着眼睛点，道道都好吃。带孩子去的首选，牛大骨啃着过瘾。",
    restaurantType: "西北菜",
    estimatedPrice: "80-120 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 10, salty: 60, sweet: 10, sour: 20, greasy: 50 },
    tags: ['heavy', 'noodle', 'family']
  },
  {
    dishName: "眉州东坡",
    shortDescription: "东坡肘子，香肠。",
    reasoning: "比较精致的川菜，东坡肘子软烂脱骨，不辣的菜也做得很好。",
    restaurantType: "川菜",
    estimatedPrice: "100-150 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 40, salty: 60, sweet: 30, sour: 10, greasy: 70 },
    tags: ['heavy', 'rice', 'family']
  },

  // --- 快餐/连锁 (Fast Food) ---
  {
    dishName: "麦当劳 (McDonald's)",
    shortDescription: "金拱门，双吉。",
    reasoning: "永远的备胎，永远的安全感。",
    restaurantType: "国际快餐",
    estimatedPrice: "30-50 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 10, salty: 60, sweet: 30, sour: 10, greasy: 60 },
    tags: ['fast', 'cheap', 'heavy']
  },
  {
    dishName: "肯德基 (KFC)",
    shortDescription: "吮指原味鸡。",
    reasoning: "疯狂星期四！原味鸡永远的神。",
    restaurantType: "国际快餐",
    estimatedPrice: "30-50 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 20, salty: 60, sweet: 10, sour: 0, greasy: 70 },
    tags: ['fast', 'heavy', 'cheap']
  },
  {
    dishName: "汉堡王 (Burger King)",
    shortDescription: "皇堡，薯条粗。",
    reasoning: "火烤牛肉饼确实比炸的香，薯条也比较粗实。",
    restaurantType: "国际快餐",
    estimatedPrice: "30-60 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 10, salty: 60, sweet: 20, sour: 10, greasy: 60 },
    tags: ['fast', 'heavy', 'cheap']
  },
  {
    dishName: "赛百味 (Subway)",
    shortDescription: "三明治，健康。",
    reasoning: "如果不想吃太油腻，赛百味是快餐里比较健康的选择。",
    restaurantType: "三明治",
    estimatedPrice: "30-50 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 10, salty: 40, sweet: 10, sour: 30, greasy: 20 },
    tags: ['fast', 'light']
  },
  {
    dishName: "永和大王",
    shortDescription: "豆浆油条，卤肉饭。",
    reasoning: "中式快餐，豆浆现磨，卤肉饭虽然量不大但味道很正。",
    restaurantType: "中式快餐",
    estimatedPrice: "25-40 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 20, sour: 0, greasy: 40 },
    tags: ['fast', 'cheap', 'rice']
  },
  {
    dishName: "真功夫",
    shortDescription: "蒸菜，排骨饭。",
    reasoning: "蒸出来的比较健康，适合不想吃油炸食品的时候。",
    restaurantType: "中式快餐",
    estimatedPrice: "30-50 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 10, salty: 40, sweet: 10, sour: 0, greasy: 30 },
    tags: ['fast', 'light', 'rice']
  },
  {
    dishName: "田老师红烧肉",
    shortDescription: "红烧肉盖饭。",
    reasoning: "北京打工人的记忆，极度便宜，红烧肉虽然肥但下饭。",
    restaurantType: "中式快餐",
    estimatedPrice: "20-30 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 40, sour: 0, greasy: 70 },
    tags: ['fast', 'cheap', 'heavy', 'rice']
  },
  {
    dishName: "南城香",
    shortDescription: "虾仁馄饨，盖饭。",
    reasoning: "社区食堂，水果小菜免费，非常实惠，馄饨个大。",
    restaurantType: "社区快餐",
    estimatedPrice: "25-35 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 10, salty: 40, sweet: 0, sour: 10, greasy: 30 },
    tags: ['fast', 'cheap', 'light', 'rice']
  },
  {
    dishName: "便利蜂/7-11/罗森",
    shortDescription: "便当，关东煮。",
    reasoning: "赶时间？便利店永远亮着灯等你，关东煮热乎乎。",
    restaurantType: "便利店",
    estimatedPrice: "15-25 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 10, salty: 50, sweet: 10, sour: 0, greasy: 30 },
    tags: ['fast', 'cheap', 'snack']
  },
  
  // --- 小吃/甜点/其他 (Snacks/Desserts) ---
  {
    dishName: "门框胡同·卤煮火烧",
    shortDescription: "肠肥肺烂，重口味。",
    reasoning: "老北京硬核下午茶，一碗下肚浑身暖和，加蒜汁绝了。",
    restaurantType: "老北京小吃",
    estimatedPrice: "30-40 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 10, salty: 90, sweet: 0, sour: 20, greasy: 80 },
    tags: ['traditional', 'snack', 'heavy', 'cheap']
  },
  {
    dishName: "姚记炒肝",
    shortDescription: "炒肝包子，拜登去过。",
    reasoning: "要想吃炒肝，鼓楼一拐弯。蒜香浓郁，稀溜着喝。",
    restaurantType: "老北京小吃",
    estimatedPrice: "30-50 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 0, salty: 70, sweet: 0, sour: 20, greasy: 60 },
    tags: ['traditional', 'snack', 'heavy']
  },
  {
    dishName: "护国寺小吃",
    shortDescription: "豆汁儿，面茶，豌豆黄。",
    reasoning: "北京小吃集大成者，豆汁儿敢挑战吗？豌豆黄很细腻。",
    restaurantType: "清真小吃",
    estimatedPrice: "20-40 RMB",
    calories: "300 kcal",
    flavorProfile: { spicy: 0, salty: 30, sweet: 60, sour: 40, greasy: 20 },
    tags: ['traditional', 'snack', 'cheap', 'light']
  },
  {
    dishName: "锦芳小吃",
    shortDescription: "元宵，奶油炸糕。",
    reasoning: "元宵节排队排到腿软，平时的奶油炸糕和面茶也不错。",
    restaurantType: "清真小吃",
    estimatedPrice: "20-40 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 0, salty: 20, sweet: 80, sour: 0, greasy: 50 },
    tags: ['traditional', 'snack', 'sweet']
  },
  {
    dishName: "魏家凉皮",
    shortDescription: "秘制辣油，肉夹馍。",
    reasoning: "简单快捷，魏家的辣油非常香，配个肉夹馍绝了。",
    restaurantType: "快餐连锁",
    estimatedPrice: "20-30 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 70, salty: 60, sweet: 10, sour: 30, greasy: 30 },
    tags: ['fast', 'cold', 'spicy', 'cheap', 'snack', 'noodle']
  },
  {
    dishName: "夸父炸串",
    shortDescription: "刷酱炸串。",
    reasoning: "追剧神器，下班买一把带回家，快乐似神仙。",
    restaurantType: "小吃炸串",
    estimatedPrice: "25-40 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 50, salty: 80, sweet: 20, sour: 0, greasy: 90 },
    tags: ['snack', 'heavy', 'spicy', 'late_night', 'cheap']
  },
  {
    dishName: "阿香米线",
    shortDescription: "番茄米线，过桥米线。",
    reasoning: "汤很浓，米线可以无限续，商场里比较稳的选择。",
    restaurantType: "快餐连锁",
    estimatedPrice: "30-50 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 20, salty: 60, sweet: 10, sour: 30, greasy: 40 },
    tags: ['fast', 'hot', 'noodle']
  },
  {
    dishName: "杨国福/张亮麻辣烫",
    shortDescription: "称重麻辣烫，想吃啥拿啥。",
    reasoning: "一个人的狂欢，麻酱或者骨汤都不错，一定要加方便面。",
    restaurantType: "快餐",
    estimatedPrice: "30-50 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 60, salty: 70, sweet: 10, sour: 10, greasy: 60 },
    tags: ['fast', 'spicy', 'hot', 'heavy']
  },
  {
    dishName: "半天妖烤鱼",
    shortDescription: "青花椒烤鱼，米饭杀手。",
    reasoning: "2元米饭自助，烤鱼味道重，非常下饭。",
    restaurantType: "连锁烤鱼",
    estimatedPrice: "70-90 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 60, salty: 80, sweet: 10, sour: 0, greasy: 70 },
    tags: ['heavy', 'spicy', 'hot', 'rice']
  },
  {
    dishName: "江边城外烤全鱼",
    shortDescription: "怪味烤鱼。",
    reasoning: "烤鱼界的常青树，怪味和豆豉味都很经典。",
    restaurantType: "烤鱼",
    estimatedPrice: "80-110 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 50, salty: 80, sweet: 20, sour: 10, greasy: 70 },
    tags: ['heavy', 'spicy', 'hot']
  },
  {
    dishName: "蛙来哒",
    shortDescription: "紫苏牛蛙。",
    reasoning: "牛蛙很嫩，紫苏味很特别，环境比较夜店风。",
    restaurantType: "牛蛙火锅",
    estimatedPrice: "100-130 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 70, salty: 70, sweet: 10, sour: 0, greasy: 60 },
    tags: ['spicy', 'heavy', 'hot']
  },
  {
    dishName: "胡大饭馆",
    shortDescription: "簋街排队王，麻辣小龙虾。",
    reasoning: "来簋街不吃胡大等于没来，麻小确实入味，辣得嘴肿也要吃。",
    restaurantType: "川菜/小龙虾",
    estimatedPrice: "150-200 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 100, salty: 80, sweet: 10, sour: 0, greasy: 80 },
    tags: ['spicy', 'heavy', 'late_night', 'snack']
  },
  {
    dishName: "味多美",
    shortDescription: "老婆饼，奶油蛋糕。",
    reasoning: "北京人的面包房，老婆饼永远的神，价格亲民。",
    restaurantType: "面包甜点",
    estimatedPrice: "20-40 RMB",
    calories: "350 kcal",
    flavorProfile: { spicy: 0, salty: 10, sweet: 90, sour: 0, greasy: 50 },
    tags: ['snack', 'cheap', 'sweet']
  },
  {
    dishName: "好利来 (Holiland)",
    shortDescription: "半熟芝士，粉色装潢。",
    reasoning: "半熟芝士口感绵密，联名款很多，颜值高。",
    restaurantType: "甜品店",
    estimatedPrice: "30-60 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 0, salty: 10, sweet: 90, sour: 10, greasy: 60 },
    tags: ['snack', 'sweet']
  },
  {
    dishName: "鲍师傅糕点",
    shortDescription: "肉松小贝。",
    reasoning: "肉松小贝的鼻祖，海苔味最好吃，排队也值得买几个。",
    restaurantType: "中式糕点",
    estimatedPrice: "30-50 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 30, sweet: 70, sour: 0, greasy: 60 },
    tags: ['snack', 'sweet', 'heavy']
  },
  {
    dishName: "喜茶 (HEYTEA)",
    shortDescription: "多肉葡萄，芝士茗茶。",
    reasoning: "喝一杯快乐水，多肉葡萄yyds，芝士奶盖很浓郁。",
    restaurantType: "奶茶",
    estimatedPrice: "20-30 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 0, salty: 10, sweet: 80, sour: 10, greasy: 30 },
    tags: ['snack', 'sweet', 'cold']
  },
  {
    dishName: "奈雪的茶",
    shortDescription: "霸气橙子，欧包。",
    reasoning: "茶+软欧包的搭配，适合下午茶歇歇脚。",
    restaurantType: "奶茶/面包",
    estimatedPrice: "20-40 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 0, salty: 10, sweet: 80, sour: 20, greasy: 30 },
    tags: ['snack', 'sweet', 'cold']
  },
  {
    dishName: "吴裕泰·冰淇淋",
    shortDescription: "花茶冰淇淋。",
    reasoning: "前门排队必买，茶味超级浓郁，不甜不腻，关键是便宜。",
    restaurantType: "甜品",
    estimatedPrice: "10-15 RMB",
    calories: "200 kcal",
    flavorProfile: { spicy: 0, salty: 0, sweet: 60, sour: 0, greasy: 20 },
    tags: ['snack', 'sweet', 'cold', 'cheap', 'traditional']
  },
  {
    dishName: "小吊梨汤",
    shortDescription: "梨汤，干酪鱼。",
    reasoning: "环境复古，梨汤润肺，菜品精致且不贵，适合小聚。",
    restaurantType: "私房菜",
    estimatedPrice: "80-100 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 60, sour: 10, greasy: 30 },
    tags: ['traditional', 'light', 'sweet']
  },
  {
    dishName: "外婆家",
    shortDescription: "麻婆豆腐，茶香鸡。",
    reasoning: "3块钱的麻婆豆腐是传说，性价比极高的杭帮菜。",
    restaurantType: "江浙菜",
    estimatedPrice: "50-70 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 20, salty: 50, sweet: 30, sour: 0, greasy: 50 },
    tags: ['cheap', 'family', 'rice']
  },
  {
    dishName: "绿茶餐厅",
    shortDescription: "面包诱惑，绿茶烤鸡。",
    reasoning: "面包诱惑是冰火两重天，环境幽暗适合聊天。",
    restaurantType: "江浙菜",
    estimatedPrice: "60-80 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 10, salty: 50, sweet: 40, sour: 0, greasy: 50 },
    tags: ['cheap', 'family', 'rice']
  },
  {
    dishName: "旺顺阁鱼头泡饼",
    shortDescription: "巨大的鱼头，饼蘸汤。",
    reasoning: "鱼头越大越好吃，饼吸满了汤汁比鱼肉还香。",
    restaurantType: "品质中餐",
    estimatedPrice: "150-200 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 10, salty: 70, sweet: 20, sour: 10, greasy: 60 },
    tags: ['luxury', 'heavy', 'traditional']
  },
  {
    dishName: "局气",
    shortDescription: "蜂窝煤炒饭，兔爷土豆泥。",
    reasoning: "创意京菜，菜品造型很有老北京特色，适合拍照发朋友圈。",
    restaurantType: "创意京菜",
    estimatedPrice: "100-130 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 30, sour: 10, greasy: 50 },
    tags: ['traditional', 'heavy']
  }
];

export const getFoodRecommendations = async (tags: string[], weather: WeatherData | null): Promise<FoodRecommendation[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));

  let candidates = [...LOCAL_DATABASE];
  
  // Weather-based bias text
  let weatherReason = "";
  if (weather) {
    if (weather.temperature <= 10) {
      weatherReason = `天儿冷(${weather.temperature.toFixed(1)}℃)，推荐点热乎的！`;
    } else if (weather.temperature >= 28) {
      weatherReason = `天儿热(${weather.temperature.toFixed(1)}℃)，吃点清爽的吧。`;
    }
  }

  // Scoring System
  const scored = candidates.map(dish => {
    let score = 0;
    
    // Tag matching
    dish.tags.forEach(dishTag => {
      if (tags.includes(dishTag)) score += 3; // Boost tag weight
    });

    // Weather matching
    if (weather) {
      if (weather.temperature <= 5) {
        if (dish.tags.includes('hot')) score += 2;
        if (dish.tags.includes('heavy')) score += 1;
        if (dish.tags.includes('cold')) score -= 2;
      } else if (weather.temperature >= 28) {
        if (dish.tags.includes('cold')) score += 3;
        if (dish.tags.includes('light')) score += 1;
        if (dish.tags.includes('heavy')) score -= 1;
      }
    }
    
    // Random jitter to keep things interesting even with same tags
    score += Math.random() * 2;

    return { dish, score };
  });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Return all sorted candidates (no limit as requested)
  const topCandidates = scored.map((item, index) => {
     // Dynamic Time Reasoning
    const now = new Date();
    const hours = now.getHours();
    let timeReason = "";
    
    if (hours >= 5 && hours < 10) timeReason = "早餐推荐，";
    else if (hours >= 21 || hours < 5) timeReason = "深夜食堂，";
    else if (hours >= 11 && hours <= 13) timeReason = "午餐精选，";
    else if (hours >= 17 && hours <= 20) timeReason = "晚餐时刻，";

    const fullReason = weatherReason ? `${weatherReason} ${timeReason}${item.dish.reasoning}` : `${timeReason}${item.dish.reasoning}`;

    return {
      ...item.dish,
      id: `dish-${index}-${Date.now()}`, // Generate unique ID
      reasoning: fullReason
    };
  });

  // Ensure we have at least 4 items for the wheel (pad with randoms if needed)
  if (topCandidates.length < 4) {
      const existingNames = new Set(topCandidates.map(c => c.dishName));
      const leftovers = candidates.filter(c => !existingNames.has(c.dishName));
      // Shuffle leftovers
      leftovers.sort(() => Math.random() - 0.5);
      
      let needed = 4 - topCandidates.length;
      for (let i = 0; i < needed && i < leftovers.length; i++) {
          topCandidates.push({
              ...leftovers[i],
              id: `pad-${i}-${Date.now()}`,
              reasoning: leftovers[i].reasoning
          });
      }
  }

  return topCandidates;
};
