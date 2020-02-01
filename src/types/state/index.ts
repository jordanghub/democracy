import { ThreadHomepage } from "types/thread";
import { CategoryType } from "types/categories";

export interface TState {
  app: TAppState,
  forms: TFormState,
  thread?: IThreadState
  votes: IVotesState
  user: IUserState
}

export interface IThreadState {
  latestThreads?: ThreadHomepage[]
  threadSingle?: any
  categories?: CategoryType[]
}

export interface IUserState {
  isLoggedIn: boolean | null;
}

export interface IVotesState {
  threads: any,
  messages: any,
  user: any,
  scoringCategories?: any
}

export interface TAppState {
  // votes: {
  //   threads: any,
  //   messages: any,
  //   user: any,
  // }  
  // latestThreads?: ThreadHomepage[]
  // isLoggedIn: boolean | null;
  isPageLoading: boolean,
  // categories?: CategoryType[]
  // threadSingle?: any
  // scoringCategories?: any
  flashMessage?: {
    type: string,
    message: string,
  }
} 

export interface TFormState {
  forms: any;
}
