import { Meta } from './export/meta';

export interface WorkBreaksData {
  companyId: string;
  id: string;
  name: string;
  color: string;
  icon: string;
  breakMinutes: number;
}

export interface WorkBreaksListResponse {
  data: WorkBreaksData[];
  meta: Meta;
}
