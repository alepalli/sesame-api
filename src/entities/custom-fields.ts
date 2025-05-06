import { Meta } from './export/meta';

export interface CustomFields {
  id: string;
  companyId: string;
  name: string;
  slug: string;
  type: string;
  value: string;
}

export interface CustomFieldsData {
  id: string;
  companyId: string;
  name: string;
  slug: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomFieldsResponse {
  data: CustomFieldsData;
  meta: Meta;
}

export interface CustomFieldsListResponse {
  data: CustomFieldsData[];
  meta: Meta;
}

export interface CustomFieldsRequest {
  companyId: string;
  name: string;
  slug: string;
  type: string;
}

export interface CustomFieldsRequestPut {
  name: string;
  slug: string;
}
