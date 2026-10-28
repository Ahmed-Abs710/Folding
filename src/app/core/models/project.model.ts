export type ProductCategory = 'kitchen' | 'window' | 'facade';

export interface ProjectItem {
  id: string;
  projectNumber: string; // '01', '02', '03', ...
  collectionId: string;
  collectionName: string;
  collectionArabic: string;
  title: string;
  titleAccent?: string; // Italian / modern accent term
  category: ProductCategory;
  categoryLabel: string;
  location: string;
  description: string;
  specs: string[];
  imageUrl: string;
  badge?: string;
  materialTags?: string[];
}

export interface CuratedCollection {
  id: string;
  number: string; // '01', '02', '03'
  title: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  category: ProductCategory;
  bannerImage: string;
  tags: string[];
}

export interface QuoteParameters {
  type: ProductCategory | 'folding';
  area: number;
  tier: 'standard' | 'premium' | 'luxury';
}

export interface QuoteResult {
  minPrice: number;
  maxPrice: number;
  unitLabel: string;
  tierLabel: string;
  typeLabel: string;
  summary: string;
}
