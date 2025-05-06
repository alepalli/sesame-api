import { CompanyData } from './company';
import { Meta } from './export/meta';
import { RenewalPeriod } from './enum/renewal-period';
import { DayType } from './enum/day-type';
import { PickMode } from './enum/pick-mode';
import { HalfDayVacationConfiguration } from './enum/half-day-vacation-configuration';
import { ConfigurationType } from './enum/configuration-type';

export interface VacationConfigurationData {
  id: string;
  name: string;
  employeeRequestEnabled: boolean;
  needsValidation: boolean;
  company: CompanyData;
  dayType: DayType;
  maxDaysOff: number;
  isDefault: boolean;
  notAllowedDateRanges: {
    from: string;
    to: string;
  }[];
  creationDateNextYear: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface VacationConfigurationResponse {
  data: VacationConfigurationData;
  meta: Meta;
}

export interface VacationConfigurationListResponse {
  data: VacationConfigurationData[];
  meta: Meta;
}

export interface VacationConfigurationRequest {
  name: string;
  requestVacationFrom: string;
  renewalPeriod: RenewalPeriod;
  dayType: DayType;
  pickMode: PickMode;
  maxDaysOff: number;
  creationDateNextYear: string;
  maxDateToTakeVacations: number;
  needsValidation: boolean;
  employeeRequestDenyExcessDaysOff: boolean;
  hoursQuantityConfigured: boolean;
  halfDayVacationConfiguration: HalfDayVacationConfiguration;
  allowFreeHoursSelection: boolean;
  enjoyMonthPeriod: number;
  employeeRequestEnabled: boolean;
  notAllowedDateRanges: {
    from: string;
    to: string;
  }[];
  configurationType: ConfigurationType;
}
