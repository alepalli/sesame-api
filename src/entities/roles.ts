import { Meta } from './export/meta';

export interface RolesData {
  id: string;
  name: string;
}

export interface RolesListResponse {
  data: RolesData[];
  meta: Meta;
}
