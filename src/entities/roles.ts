import { Meta } from './interfaces/meta';

export interface RolesData {
  id: string;
  name: string;
}

export interface RolesResponse {
  data: RolesData;
  meta: Meta;
}
