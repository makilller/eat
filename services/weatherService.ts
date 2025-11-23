import { WeatherData } from '../types';

export const getBeijingWeather = async (): Promise<WeatherData | null> => {
  try {
    // Beijing coordinates: 39.9042° N, 116.4074° E
    // Using Open-Meteo free API
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=39.9042&longitude=116.4074&current=temperature_2m,weather_code,is_day&timezone=Asia%2FShanghai'
    );
    
    if (!response.ok) {
      throw new Error('Weather API failed');
    }

    const data = await response.json();
    
    return {
      temperature: data.current.temperature_2m,
      weatherCode: data.current.weather_code,
      isDay: data.current.is_day === 1
    };
  } catch (error) {
    console.warn("Failed to fetch weather:", error);
    return null;
  }
};

export const getWeatherDescription = (code: number): string => {
  // WMO Weather interpretation codes (WW)
  if (code === 0) return '晴朗';
  if (code >= 1 && code <= 3) return '多云';
  if (code >= 45 && code <= 48) return '雾霾'; // Very Beijing relevant
  if (code >= 51 && code <= 67) return '有雨';
  if (code >= 71 && code <= 77) return '下雪';
  if (code >= 80 && code <= 99) return '雷雨';
  return '晴';
};