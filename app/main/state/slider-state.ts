export interface CustomSliderProps<T> {
  type: "big" | "small";
  text?: string;
  data: (T & { id: number; poster_path: string })[];
  className?: string;
}
