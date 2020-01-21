import { ThreadHomepage } from "types/thread";

export interface TState {
  app: TAppState,
}

export interface TAppState {
  latestThreads?: ThreadHomepage[]
} 
