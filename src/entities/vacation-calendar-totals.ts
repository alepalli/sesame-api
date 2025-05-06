import { Employee } from './export/employee';
import { VacationConfigurationData } from './vacation-configurations';
import { Meta } from './export/meta';

export interface VacationCalendarTotalsData {
  id: string;
  employee: Employee;
  daysOff: {
    date: string;
    seconds: number;
  }[];
  maxDaysOff: number;
  year: number;
  vacationConfiguration: VacationConfigurationData;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface VacationCalendarTotalsResponse {
  data: VacationCalendarTotalsData[];
  meta: Meta;
}
