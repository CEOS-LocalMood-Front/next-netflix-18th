export interface CustomSliderProps<T> {
  text: string;
  data: (T & { id: number; poster_path: string })[];
  className?: string;
}
