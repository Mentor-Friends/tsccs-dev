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
