
import { FoodRecommendation, WeatherData } from "../types";

// Helper interface for local data
interface LocalDish extends Omit<FoodRecommendation, 'id'> {
  id?: string;
  tags: string[];
}

const LOCAL_DATABASE: LocalDish[] = [
  // --- 烤鸭 ---
  {
    dishName: "四季民福·烤鸭",
    shortDescription: "服务好，鸭皮酥脆，也是排队王。",
    reasoning: "北京烤鸭界的顶流，鸭皮蘸糖入口即化，就在故宫边上，吃的是个氛围。",
    restaurantType: "品质京菜",
    estimatedPrice: "150-200 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 60, sour: 0, greasy: 80 },
    tags: ['traditional', 'luxury', 'heavy'] 
  },
  {
    dishName: "便宜坊·焖炉烤鸭",
    shortDescription: "崇文门总店，焖炉不见火，鸭肉嫩。",
    reasoning: "600年老字号，焖炉烤鸭更锁汁，吃起来不燥，但也绝对算硬菜。",
    restaurantType: "老字号",
    estimatedPrice: "120-180 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 50, sour: 0, greasy: 70 },
    tags: ['traditional', 'luxury', 'heavy']
  },
  {
    dishName: "利群烤鸭",
    shortDescription: "前门胡同里的老店，很多明星去过。",
    reasoning: "藏在四合院里的烟火气，鸭子烤得偏甜口，非常有老北京的感觉。",
    restaurantType: "胡同老店",
    estimatedPrice: "150-200 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 70, sour: 0, greasy: 80 },
    tags: ['traditional', 'heavy']
  },
  
  // --- 涮肉 ---
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
    shortDescription: "景泰蓝小锅，麻酱画笑脸，肉质鲜嫩。",
    reasoning: "环境好，肉质稳，特别是那一碗笑脸麻酱，看着就开心。",
    restaurantType: "老北京涮肉",
    estimatedPrice: "100-150 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 30, sour: 0, greasy: 50 },
    tags: ['traditional', 'hot', 'heavy']
  },
  {
    dishName: "满恒记",
    shortDescription: "平安里排队神店，金奖麻酱糖饼。",
    reasoning: "除了涮肉，他家的麻酱糖饼简直是碳水炸弹，太香了，值得排队。",
    restaurantType: "清真火锅",
    estimatedPrice: "100-130 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 80, sour: 0, greasy: 70 },
    tags: ['traditional', 'hot', 'heavy', 'snack']
  },

  // --- 炙子烤肉 ---
  {
    dishName: "烤肉季",
    shortDescription: "什刹海边，武吃烤肉，老字号。",
    reasoning: "南宛北季，风景好，肉腌得入味，大口吃肉的感觉非常爽。",
    restaurantType: "老字号",
    estimatedPrice: "100-150 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 20, salty: 80, sweet: 30, sour: 0, greasy: 80 },
    tags: ['traditional', 'heavy', 'hot']
  },
  {
    dishName: "厚味居·炙子烤肉",
    shortDescription: "南城老店，大板凳，烟火气十足。",
    reasoning: "地道的南城味道，牛肉和酸菜一起烤，解腻又过瘾。",
    restaurantType: "老北京烤肉",
    estimatedPrice: "80-120 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 30, salty: 80, sweet: 10, sour: 20, greasy: 90 },
    tags: ['traditional', 'heavy', 'hot', 'late_night']
  },

  // --- 驻京办/地方菜 ---
  {
    dishName: "老川办餐厅",
    shortDescription: "建国门贡院头条，最正宗的川菜之一。",
    reasoning: "想吃辣？老川办依然是北京川菜的标杆，水煮鱼和毛血旺非常地道。",
    restaurantType: "驻京办",
    estimatedPrice: "80-120 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 90, salty: 80, sweet: 10, sour: 10, greasy: 90 },
    tags: ['spicy', 'heavy', 'hot', 'rice']
  },
  {
    dishName: "新新湘菜馆",
    shortDescription: "东城区老店，剁椒鱼头是一绝。",
    reasoning: "嗜辣星人的福音，剁椒鱼头鲜辣过瘾，拌面吃能吃两碗。",
    restaurantType: "湘菜",
    estimatedPrice: "70-100 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 90, salty: 90, sweet: 0, sour: 20, greasy: 60 },
    tags: ['spicy', 'heavy', 'hot', 'rice']
  },
  {
    dishName: "哈尔滨驻京办·京滨饭店",
    shortDescription: "锅包肉酸甜适中，大拉皮爽口。",
    reasoning: "量大实惠，正宗东北味，锅包肉咬下去咔哧咔哧响。",
    restaurantType: "驻京办/东北菜",
    estimatedPrice: "60-90 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 70, sour: 50, greasy: 60 },
    tags: ['heavy', 'cheap', 'rice']
  },

  // --- 面食/主食 ---
  {
    dishName: "方砖厂69号炸酱面",
    shortDescription: "谢霆锋去过的网红店，只卖炸酱面。",
    reasoning: "专注于一碗面，酱香浓郁，菜码新鲜，腊八蒜随便吃。",
    restaurantType: "胡同面馆",
    estimatedPrice: "25-30 RMB",
    calories: "550 kcal",
    flavorProfile: { spicy: 0, salty: 90, sweet: 20, sour: 10, greasy: 50 },
    tags: ['traditional', 'noodle', 'cheap', 'fast']
  },
  {
    dishName: "宇飞牛肉面",
    shortDescription: "垂杨柳神店，汤头浓郁，牛肉大块。",
    reasoning: "没有服务，环境一般，但那口汤是真的香，老北京的重口味牛肉面。",
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
    dishName: "门框胡同·卤煮火烧",
    shortDescription: "肠肥肺烂，火烧入味，重口味必选。",
    reasoning: "老北京的硬核下午茶/晚餐，一碗下肚浑身暖和，加点蒜汁绝了。",
    restaurantType: "老北京小吃",
    estimatedPrice: "30-40 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 10, salty: 90, sweet: 0, sour: 20, greasy: 80 },
    tags: ['traditional', 'snack', 'heavy', 'cheap']
  },

  // --- 异国料理 ---
  {
    dishName: "基辅罗斯餐厅",
    shortDescription: "边吃罐焖牛肉边听苏联老歌。",
    reasoning: "氛围感拉满，如果是带长辈或者喜欢复古风，这里绝对是首选，红菜汤很正。",
    restaurantType: "俄式西餐",
    estimatedPrice: "150-200 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 50, sour: 40, greasy: 60 },
    tags: ['luxury', 'heavy']
  },
  {
    dishName: "Annie's 安妮意大利餐厅",
    shortDescription: "性价比很高的正宗意餐，餐前面包超赞。",
    reasoning: "服务极其亲切，家庭聚餐首选，虽然上菜快，但绝对是正经西餐享受。",
    restaurantType: "品质西餐",
    estimatedPrice: "100-150 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 0, salty: 50, sweet: 20, sour: 20, greasy: 60 },
    tags: ['luxury', 'heavy']
  },

  // --- 快餐/连锁 ---
  {
    dishName: "麦当劳 (McDonald's)",
    shortDescription: "双吉、薯条、麦旋风。",
    reasoning: "不知道吃啥就吃麦当劳，永远不会背叛你的味道。",
    restaurantType: "国际快餐",
    estimatedPrice: "30-50 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 10, salty: 60, sweet: 30, sour: 10, greasy: 60 },
    tags: ['fast', 'cheap', 'heavy']
  },
  {
    dishName: "肯德基 (KFC)",
    shortDescription: "吮指原味鸡，老北京鸡肉卷。",
    reasoning: "疯狂星期四的时候更香，早餐的皮蛋瘦肉粥也是一绝。",
    restaurantType: "国际快餐",
    estimatedPrice: "30-50 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 20, salty: 60, sweet: 10, sour: 0, greasy: 70 },
    tags: ['fast', 'heavy', 'cheap']
  },
  {
    dishName: "达美乐比萨",
    shortDescription: "30分钟必达，土豆泥培根比萨。",
    reasoning: "不想出门？叫个达美乐吧，饼底酥软，送得飞快。",
    restaurantType: "比萨外送",
    estimatedPrice: "40-70 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 0, salty: 60, sweet: 30, sour: 10, greasy: 60 },
    tags: ['fast', 'heavy']
  },
  {
    dishName: "半天妖烤鱼",
    shortDescription: "青花椒烤鱼，米饭杀手。",
    reasoning: "性价比很高的烤鱼连锁，2元米饭自助，打工人的大食堂。",
    restaurantType: "连锁烤鱼",
    estimatedPrice: "70-90 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 60, salty: 80, sweet: 10, sour: 0, greasy: 70 },
    tags: ['heavy', 'spicy', 'hot', 'rice']
  },
   {
    dishName: "张拉拉/陈香贵·兰州拉面",
    shortDescription: "免费续面，羊肉串很香。",
    reasoning: "环境干净的新式拉面，想大口吸溜碳水的时候来这里准没错。",
    restaurantType: "新式面馆",
    estimatedPrice: "30-40 RMB",
    calories: "550 kcal",
    flavorProfile: { spicy: 40, salty: 60, sweet: 0, sour: 10, greasy: 40 },
    tags: ['noodle', 'fast', 'hot', 'cheap']
  },
  {
    dishName: "海底捞火锅",
    shortDescription: "服务好，番茄汤好喝。",
    reasoning: "半夜想吃火锅？去海底捞吧。不知道去哪？去海底捞吧。",
    restaurantType: "火锅",
    estimatedPrice: "100-200 RMB",
    calories: "800 kcal",
    flavorProfile: { spicy: 40, salty: 60, sweet: 20, sour: 10, greasy: 60 },
    tags: ['hot', 'heavy', 'luxury', 'late_night']
  },
  {
    dishName: "魏家凉皮",
    shortDescription: "秘制辣油，肉夹馍酥脆。",
    reasoning: "简单快捷，魏家的辣油非常香，配个肉夹馍绝了。",
    restaurantType: "快餐连锁",
    estimatedPrice: "20-30 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 70, salty: 60, sweet: 10, sour: 30, greasy: 30 },
    tags: ['fast', 'cold', 'spicy', 'cheap', 'snack', 'noodle']
  },
  {
    dishName: "夸父炸串",
    shortDescription: "刷酱炸串，种类丰富。",
    reasoning: "追剧神器，下班买一把带回家，快乐似神仙。",
    restaurantType: "小吃炸串",
    estimatedPrice: "25-40 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 50, salty: 80, sweet: 20, sour: 0, greasy: 90 },
    tags: ['snack', 'heavy', 'spicy', 'late_night', 'cheap']
  },
  {
    dishName: "味多美/好利来",
    shortDescription: "老婆饼、半熟芝士、奶油蛋糕。",
    reasoning: "生活太苦，吃点甜的。好利来的半熟芝士，味多美的老婆饼，经典。",
    restaurantType: "面包甜点",
    estimatedPrice: "20-40 RMB",
    calories: "350 kcal",
    flavorProfile: { spicy: 0, salty: 10, sweet: 90, sour: 0, greasy: 50 },
    tags: ['snack', 'cheap']
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

  // Take top 8 candidates for the wheel
  const topCandidates = scored.slice(0, 8).map((item, index) => {
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
