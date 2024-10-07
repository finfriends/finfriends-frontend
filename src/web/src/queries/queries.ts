export const QueryKey = {
  Config: ['GetConfig'],
  GetConfig: () => [QueryKey.Config],

  HighestStaticRecord: ['HighestStaticRecord'],
  GetHighestStaticRecord: () => [QueryKey.HighestStaticRecord],
};
