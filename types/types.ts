// types/types.ts

export interface Advantage {
  icon: string;
  text: string;
}

export interface HeroData {
  hero: Advantage[];
}

// Можно экспортировать типы по умолчанию или добавлять дополнительные типы
export type ApiResponse = {
  data: HeroData;
};
