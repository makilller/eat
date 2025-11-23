export interface FlavorProfile {
  spicy: number;
  salty: number;
  sweet: number;
  sour: number;
  greasy: number;
}

export interface FoodRecommendation {
  dishName: string;
  shortDescription: string;
  reasoning: string;
  restaurantType: string;
  estimatedPrice: string;
  calories: string;
  flavorProfile: FlavorProfile;
}

export interface Tag {
  id: string;
  label: string;
  category: 'taste' | 'type' | 'price' | 'temp';
}