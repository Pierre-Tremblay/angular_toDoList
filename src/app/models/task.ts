export interface Task {
  id: number;
  title: string;
  description?: string;
  done: boolean;
  idUser: number;
  idCategory: number;
}
