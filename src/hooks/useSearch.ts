import { useMemo } from 'react';
import type { BadgeData } from '@/types/BadgeData';

export const useSearch = (data: BadgeData[], searchText: string) => {
  return useMemo(() => {
    if (!searchText.trim()) {
      return data;
    }
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
  }, [data, searchText]);
};
