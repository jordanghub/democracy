import { ThreadHomepage } from "types/thread";
import { CategoryType } from "types/categories";

export interface TState {
  app: TAppState,
  forms: TFormState,
}

export interface TAppState {
  votes: {
    threads: any,
    messages: any,
    user: any,
  }
  latestThreads?: ThreadHomepage[]
  isLoggedIn: boolean | null;
  isPageLoading: boolean,
  categories?: CategoryType[]
  threadSingle?: any
  scoringCategories?: any
  flashMessage?: {
    type: string,
    message: string,
  }
} 

export interface TFormState {
  forms: any;
}
