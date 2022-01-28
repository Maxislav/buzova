import { IPoint } from './turn-point.interface';

export interface IRoute {
  id: number;
  name: string;
  points: IPoint[];
}
