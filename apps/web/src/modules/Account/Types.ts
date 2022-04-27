export enum AccountPath {
  List = '/address',
  Send = '/transfer',
}
export const AccountTab = {
  route: AccountPath.List,
  title: 'Addresses',
};
export interface TransferParam {
  to: string;
  value: string;
}
