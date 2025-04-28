import { Meta } from './export/meta';

export interface RolesData {
  id: string;
  name: string;
}

export interface RolesResponse {
  data: RolesData;
  meta: Meta;
}
