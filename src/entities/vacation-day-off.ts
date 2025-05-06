import { Calendar } from './export/calendar';
import { Employee } from './export/employee';
import { Meta } from './export/meta';

export interface VacationDayOffData {
  id: string;
  date: string;
  seconds: number;
  calendar: Calendar;
  employee: Employee;
}

export interface VacationDayOffListResponse {
  data: VacationDayOffData[];
  meta: Meta;
}
