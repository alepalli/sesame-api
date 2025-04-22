import { Meta } from './interfaces/meta';

export interface CheckTypesData{
  companyId: string;
  id: string;
  name: string;
}

export interface CheckTypesResponse {
  data: CheckTypesData;
  meta: Meta;
}