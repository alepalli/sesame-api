import { Meta } from './export/meta';

export interface DocumentsData {
  id: string;
  name: string;
  rootDirectoryType: string;
  directoryType: string;
}

export interface DirectoryDocumentsData {
  id: string;
  name: string;
  createdBy: {
    id: string;
    type: string;
    name: string;
    pictureUrl: string;
  };
  createdAt: string;
  updatedAt: string;
  fileType: string;
  fieSize: string;
}

export interface DocumentsDataResponsePost {
  id: string;
}

export interface DocumentsListResponse {
  data: DocumentsData[];
  meta: Meta;
}

export interface DirectoryDocumentsListResponse {
  data: DirectoryDocumentsData[];
  meta: Meta;
}

export interface DocumentsRequest {
  document: string;
  originalDate: string;
  name: string;
}
