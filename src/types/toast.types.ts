export interface IToast {
  type: 'success' | 'warning' | 'error' | 'info';
  captionId: string;
  timeout?: number;
}
