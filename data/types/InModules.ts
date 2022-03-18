import { ReactNode } from "react";

export interface InModulesDetails {
  title: string | ReactNode;
  count?: number;
  icon?: string | ReactNode;
  key: string;
  color?: string;
  url?: string;
  dataIndex: string;
  align: string;
}

export interface InModulesElement {
  title: string | ReactNode;
  total: number;
  icon?: string | ReactNode | null;
  key: string;
  color?: string;
  details: Array<InModulesDetails>;
  dataSource: Array<InModulesDetails>;
}

export interface InModule {
  [key: string]: Array<InModulesElement>;
}

export interface InModuleGroup {
  [key: string]: InModule;
}
export interface PostElement { 
  title: string;
  dataIndex: string;
  key: string;
  align: string;
  fixed?: string;
  url?: string;
}
export interface detailGroup {
  title: string;
  key: string;
  details: Array<detailModule>
  
}
export interface detailModule {
  title: string;
  key: string;
  details: detailElement;
  
}
export interface detailElement {
  title: string;
  key: string;
  
}
