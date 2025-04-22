import { Meta } from './interfaces/meta';

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
