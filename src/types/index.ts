export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type HistoryStep = {
  id: number;
  indexFrom: number;
  indexTo: number;
};

export type PostsStoreState = {
  posts: Post[];
  historySteps: HistoryStep[];
};
