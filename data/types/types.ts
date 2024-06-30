export interface Button {
  text: string;
  bg: string;
  width: string;
  height: string;
  radius: string;
  clr: string;
}
export interface NavOptions {
  text: string;
  to: string;
}

export interface List {
  id: number;
  title: string;
}

export interface IPhaseItem {
  id: number;
  image: string;
  style1: string;
  style2: string;
  style3: string;
  style4: string;
  style5: string;
  dataAos: string;
  list: List[];
  phase: string;
}
