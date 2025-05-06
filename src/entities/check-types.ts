import { Meta } from './export/meta';

export interface CheckTypesData{
  companyId: string;
  id: string;
  name: string;
}

export interface CheckTypesListResponse {
  data: CheckTypesData[];
  meta: Meta;
}