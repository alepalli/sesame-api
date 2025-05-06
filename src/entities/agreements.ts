import { Meta } from './export/meta';

export interface AgreementsData {
  id: string;
  companyId: string;
  name: string;
  code: string;
  color: string;
  annualHours: number;
  additionalHoursPercent: number;
  totalAdditionalHours: number;
  maxDaysToWork: number;
  createdAt: string;
  updatedAt: string;
}

export interface AgreementsResponse {
  data: AgreementsData;
  meta: Meta;
}

export interface AgreementsListResponse {
  data: AgreementsData[];
  meta: Meta;
}

export interface AgreementsRequest {
  name: string;
  code: string;
  color: string;
  annualHours: number;
}

export interface AgreementResponse {
  id: string;
}



