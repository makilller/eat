
import { FoodRecommendation, WeatherData } from "../types";

// Helper interface for local data
interface LocalDish extends FoodRecommendation {
  tags: string[];
}

const LOCAL_DATABASE: LocalDish[] = [
  {
    dishName: "全聚德/四季民福·烤鸭",
    shortDescription: "皮酥肉嫩，肥而不腻，北京美食的金字招牌。",
    reasoning: "来北京怎能不吃烤鸭？用刚出炉的鸭皮蘸白糖，或者卷荷叶饼，每一口都是满足。",
    restaurantType: "老字号/品质烤鸭店",
    estimatedPrice: "150-300 RMB",
    calories: "450 kcal/100g",
    flavorProfile: { spicy: 0, salty: 40, sweet: 60, sour: 0, greasy: 80 },
    tags: ['traditional', 'luxury', 'heavy', 'rice'] 
  },
  {
    dishName: "老北京炸酱面",
    shortDescription: "菜码丰富，酱香浓郁，地道的老北京滋味。",
    reasoning: "实惠又管饱，这一碗黑酱里藏着北京人的魂。记得就瓣蒜！",
    restaurantType: "胡同面馆",
    estimatedPrice: "20-35 RMB",
    calories: "550 kcal",
    flavorProfile: { spicy: 0, salty: 90, sweet: 30, sour: 10, greasy: 40 },
    tags: ['traditional', 'noodle', 'cheap', 'heavy']
  },
  {
    dishName: "铜锅涮肉",
    shortDescription: "炭火铜锅，清水一盏，葱姜二三，羊肉鲜嫩。",
    reasoning: "最适合现在的天气，热气腾腾的铜锅是北京社交的硬通货，麻酱是灵魂。",
    restaurantType: "清真涮肉馆",
    estimatedPrice: "100-150 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 10, salty: 60, sweet: 20, sour: 0, greasy: 50 },
    tags: ['traditional', 'hot', 'heavy', 'luxury', 'late_night']
  },
   {
    dishName: "门框胡同·卤煮火烧",
    shortDescription: "火烧透而不黏，肉烂而不糟，重口味爱好者的天堂。",
    reasoning: "如果您好这一口，这碗热乎乎的卤煮绝对能抚慰您的胃，肠肥肺烂。",
    restaurantType: "街边老店",
    estimatedPrice: "25-35 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 20, salty: 90, sweet: 0, sour: 20, greasy: 90 },
    tags: ['traditional', 'heavy', 'snack', 'cheap', 'hot']
  },
  {
    dishName: "街边·煎饼果子",
    shortDescription: "绿豆面皮，薄脆酥香，刷上酱料，咬一口满嘴香。",
    reasoning: "无论是早餐还是深夜食堂，它都是最温暖最便捷的陪伴，记得加俩蛋。",
    restaurantType: "街边档口",
    estimatedPrice: "10-18 RMB",
    calories: "400 kcal",
    flavorProfile: { spicy: 20, salty: 60, sweet: 30, sour: 0, greasy: 30 },
    tags: ['fast', 'snack', 'cheap', 'traditional', 'hot']
  },
   {
    dishName: "杨国福/张亮·麻辣烫",
    shortDescription: "蔬菜肉丸一锅烩，麻辣鲜香，想吃什么夹什么。",
    reasoning: "快速解决战斗，口味还能自己掌控，热辣过瘾，抚慰打工人的心。",
    restaurantType: "快餐连锁",
    estimatedPrice: "30-50 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 80, salty: 70, sweet: 10, sour: 20, greasy: 60 },
    tags: ['fast', 'spicy', 'hot', 'heavy', 'cheap']
  },
  {
    dishName: "姚记·炒肝 + 包子",
    shortDescription: "汤汁浓稠透亮，肝香肠肥，配上热包子是绝配。",
    reasoning: "地道北京早餐标配，虽然名字叫炒肝，其实是煮出来的勾芡美味，要吸溜着喝。",
    restaurantType: "早餐店/老字号",
    estimatedPrice: "25-40 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 0, salty: 70, sweet: 0, sour: 0, greasy: 50 },
    tags: ['traditional', 'snack', 'cheap', 'hot']
  },
  {
    dishName: "新川·凉面",
    shortDescription: "酸辣爽口，麻酱浓郁，芥末微冲，口感筋道。",
    reasoning: "如果觉得燥热没胃口，这一碗带点芥末劲儿的凉面绝对能打开您的味蕾。",
    restaurantType: "老字号小吃店",
    estimatedPrice: "18-25 RMB",
    calories: "350 kcal",
    flavorProfile: { spicy: 40, salty: 50, sweet: 20, sour: 60, greasy: 20 },
    tags: ['cold', 'light', 'snack', 'cheap', 'fast', 'noodle']
  },
  {
    dishName: "宫保鸡丁 + 米饭",
    shortDescription: "红而不辣，刚断生，辣香酸甜，鸡肉滑嫩。",
    reasoning: "作为国菜，它是米饭杀手，酸甜口非常适合大众口味，峨嵋酒家最正宗。",
    restaurantType: "家常菜/川菜馆",
    estimatedPrice: "40-60 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 30, salty: 50, sweet: 70, sour: 40, greasy: 50 },
    tags: ['rice', 'traditional', 'light']
  },
   {
    dishName: "庆丰/西四·包子",
    shortDescription: "皮薄馅大，汁多味美，老字号的放心选择。",
    reasoning: "不知道吃什么的时候，吃包子总没错，猪肉大葱是经典，方便快捷。",
    restaurantType: "快餐连锁",
    estimatedPrice: "20-30 RMB",
    calories: "350 kcal",
    flavorProfile: { spicy: 0, salty: 40, sweet: 10, sour: 0, greasy: 30 },
    tags: ['fast', 'light', 'cheap', 'traditional', 'snack']
  },
   {
    dishName: "望京小腰/很久以前·烤串",
    shortDescription: "炭火烤制，孜然辣椒面撒匀，滋滋冒油。",
    reasoning: "不管是夏天配啤酒还是冬天解馋，撸串都是北京夜生活的灵魂。",
    restaurantType: "烧烤店",
    estimatedPrice: "80-150 RMB",
    calories: "700 kcal",
    flavorProfile: { spicy: 60, salty: 70, sweet: 0, sour: 0, greasy: 80 },
    tags: ['late_night', 'heavy', 'spicy', 'hot', 'snack']
  },
  {
    dishName: "尹三·豆汁儿 + 焦圈",
    shortDescription: "酸中带馊，馊中带香，老北京的味觉挑战。",
    reasoning: "想要体验最硬核的北京文化？配上焦圈和咸菜丝，这是清热败火的神器。",
    restaurantType: "老字号小吃店",
    estimatedPrice: "10-15 RMB",
    calories: "200 kcal",
    flavorProfile: { spicy: 0, salty: 10, sweet: 5, sour: 90, greasy: 10 },
    tags: ['traditional', 'cheap', 'light', 'snack']
  },
  {
    dishName: "局气·蜂窝煤炒饭",
    shortDescription: "造型独特像煤球，糯米口感，甜咸适口。",
    reasoning: "既能拍照发朋友圈，味道也不错，是体验创意北京菜的好选择。",
    restaurantType: "创意京菜",
    estimatedPrice: "40-60 RMB",
    calories: "500 kcal",
    flavorProfile: { spicy: 0, salty: 30, sweet: 50, sour: 0, greasy: 40 },
    tags: ['rice', 'luxury', 'traditional']
  },
  {
    dishName: "麦当劳/肯德基",
    shortDescription: "熟悉的味道，稳定的品质，永不出错的选择。",
    reasoning: "当您不想冒险，或者赶时间的时候，金拱门和上校爷爷永远为您敞开大门。",
    restaurantType: "国际快餐",
    estimatedPrice: "30-50 RMB",
    calories: "600 kcal",
    flavorProfile: { spicy: 10, salty: 60, sweet: 30, sour: 10, greasy: 60 },
    tags: ['fast', 'cheap', 'heavy']
  },
   {
    dishName: "西部马华·牛肉拉面",
    shortDescription: "一清二白三红四绿五黄，汤清味鲜。",
    reasoning: "不管多晚，一碗热腾腾的拉面加个蛋，总是能治愈疲惫的身体。",
    restaurantType: "快餐/面馆",
    estimatedPrice: "25-40 RMB",
    calories: "450 kcal",
    flavorProfile: { spicy: 30, salty: 60, sweet: 0, sour: 10, greasy: 30 },
    tags: ['noodle', 'fast', 'cheap', 'hot', 'late_night']
  }
];

export const getFoodRecommendation = async (tags: string[], weather: WeatherData | null): Promise<FoodRecommendation> => {
  // Simulate network delay for better UX (so the loading animation plays)
  await new Promise(resolve => setTimeout(resolve, 800));

  let candidates = [...LOCAL_DATABASE];
  
  // Weather-based bias
  let weatherReason = "";
  if (weather) {
    if (weather.temperature <= 10) {
      // Cold weather logic
      weatherReason = `北京现在${weather.temperature.toFixed(1)}℃，天儿冷，吃点热乎的！`;
      // Boost hot and spicy items
      // We handle this by modifying how we filter/sort later, or just simple logical selection bias
    } else if (weather.temperature >= 28) {
      // Hot weather logic
      weatherReason = `北京现在${weather.temperature.toFixed(1)}℃，太热了，来点清爽的吧。`;
    } else {
      weatherReason = `北京现在${weather.temperature.toFixed(1)}℃，气温刚刚好。`;
    }
  }

  // Scoring System
  const scored = candidates.map(dish => {
    let score = 0;
    
    // Tag matching
    dish.tags.forEach(dishTag => {
      if (tags.includes(dishTag)) score += 2; // Selected tags are worth more
    });

    // Weather matching (Implicit logic)
    if (weather) {
      if (weather.temperature <= 5) {
        if (dish.tags.includes('hot')) score += 1.5;
        if (dish.tags.includes('heavy')) score += 0.5;
        if (dish.tags.includes('cold')) score -= 1;
      } else if (weather.temperature >= 28) {
        if (dish.tags.includes('cold')) score += 2;
        if (dish.tags.includes('light')) score += 1;
        if (dish.tags.includes('heavy')) score -= 0.5;
      }
    }

    return { dish, score };
  });

  // Sort by score descending + random shuffle for top items to avoid repetition
  scored.sort((a, b) => b.score - a.score);

  // Filter: Keep dishes that are within range of the highest score
  const maxScore = scored[0].score;
  const bestMatches = scored.filter(s => s.score >= maxScore - 1.5);
  
  // Random select from best matches
  const randomSelection = bestMatches[Math.floor(Math.random() * bestMatches.length)];
  const selectedDish = randomSelection.dish;

  // Dynamic Time Reasoning
  const now = new Date();
  const hours = now.getHours();
  let timeReason = "";
  
  if (hours >= 5 && hours < 10) timeReason = "早餐要吃好，";
  else if (hours >= 21 || hours < 5) timeReason = "深夜放毒时间，";
  else if (hours >= 11 && hours <= 13) timeReason = "午餐补给站，";
  else if (hours >= 17 && hours <= 20) timeReason = "晚餐时刻，";
  
  // Combine reasons
  const finalReasoning = `${weatherReason} ${timeReason}${selectedDish.reasoning}`;

  return {
    ...selectedDish,
    reasoning: finalReasoning
  };
};
