export interface ChatMessage {
  id: number;
  text: string;
  isSentByUser: boolean;
  imageUrl?: string;
}
