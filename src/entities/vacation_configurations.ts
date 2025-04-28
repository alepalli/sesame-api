import { CompanyData } from './company';
import { Meta } from './export/meta';
import { RenewalPeriod } from './enum/renewal_period';
import { DayType } from './enum/day_type';
import { PickMode } from './enum/pick_mode';
import { HalfDayVacationConfiguration } from './enum/half_day_vacation_configuration';
import { ConfigurationType } from './enum/configuration_type';

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
