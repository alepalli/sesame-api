import { Meta } from './export/meta';

export interface JobChargesRequest {
  name: string;
}

export interface JobChargesData {
  id: string;
  name: string;
  editable: boolean;
}

export interface JobChargesResponse {
  data: JobChargesData;
  meta: Meta;
}

export interface JobChargesListResponse {
  data: JobChargesData[];
  meta: Meta;
}
