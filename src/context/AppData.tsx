import { createContext } from "react";
import type { CardData, Filters, Storage } from "~/interface";

interface AppData {
  display: CardData[];
  setDisplay: (value: CardData[]) => void;
  filters: Filters;
  setFilters: (value: Filters) => void;
  results: CardData[];
  setResults: (value: CardData[]) => void;
  reapply: boolean;
  setReapply: (value: boolean) => void;
  current: CardData | null;
  setCurrent: (value: CardData) => void;
  breadcrumbs: CardData[];
  setBreadcrumbs: (value: CardData[]) => void;
  datapoints: Storage;
  setDatapoints: (value: Storage) => void;
  grid: boolean;
  setGrid: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
  pageDisplay: CardData[];
  setPageDisplay: (value: CardData[]) => void;
}
export const AppData = createContext<AppData>({} as AppData);
