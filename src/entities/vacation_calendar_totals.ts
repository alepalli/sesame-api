import { Employee } from './interfaces/employee';
import { VacationConfigurationData } from './vacation_configurations';
import { Meta } from './interfaces/meta';

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
  data: VacationCalendarTotalsData;
  meta: Meta;
}
