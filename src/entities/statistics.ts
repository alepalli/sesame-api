import { Meta } from './interfaces/meta';

export interface StatisticsData {
  employeeId: string;
  secondsWorked: number;
  secondsToWork: number;
  secondsBalance: number;
}
export interface StatisticsResponse {
  data: StatisticsData;
  meta: Meta;
}