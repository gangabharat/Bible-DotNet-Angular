export interface News {
  Name: string;
  Title: string;
  Domain: string;
  BreachDate: string;
  AddedDate: Date;
  ModifiedDate: Date;
  PwnCount: number;
  Description: string;
  LogoPath: string;
  DataClasses: string[];
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
}
