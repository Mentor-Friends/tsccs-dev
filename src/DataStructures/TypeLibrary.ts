export type TLibrary = {
  order: number;
  url: string;
};

export type TMainLibrary = {
  css: TLibrary[];
  js: TLibrary[];
};

export type TAssistant = {
  id: string;
  input: string;
  type: string;
};

export type TCustomFunction = {
  id?: number;
  code: string;
  name: string;
  slug: string;
};
