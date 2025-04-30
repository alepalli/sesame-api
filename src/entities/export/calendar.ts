import { VacationConfigurationData } from '../vacation_configurations';

export interface Calendar {
  id: string;
  maxDaysOff: number;
  year: number;
  vacationConfiguration: VacationConfigurationData;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}