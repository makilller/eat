import { Tag } from './types';

export const AVAILABLE_TAGS: Tag[] = [
  { id: 'fast', label: '快餐', category: 'type' },
  { id: 'light', label: '清淡', category: 'taste' },
  { id: 'heavy', label: '重口', category: 'taste' },
  { id: 'cheap', label: '实惠', category: 'price' },
  { id: 'luxury', label: '大餐', category: 'price' },
  { id: 'traditional', label: '传统', category: 'type' },
  { id: 'hot', label: '热乎', category: 'temp' },
  { id: 'cold', label: '凉爽', category: 'temp' },
  { id: 'spicy', label: '香辣', category: 'taste' },
  { id: 'noodle', label: '面食', category: 'type' },
  { id: 'rice', label: '米饭', category: 'type' },
  { id: 'snack', label: '小吃', category: 'type' },
  { id: 'late_night', label: '宵夜', category: 'type' },
];

export const COLORS = {
  primary: '#ef4444', // Red 500
  secondary: '#f59e0b', // Amber 500
  accent: '#0ea5e9', // Sky 500
  dark: '#020617', // Slate 950
};