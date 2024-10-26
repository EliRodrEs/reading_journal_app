export type Book = {
  id: number;
  title: string;
  subtitle: string;
  author?: string;
  tier?: string;
  img?: string;
  genres?: string[];
  hasRepresentation: boolean;
};
