export interface FlashCards {
  id: number | string;
  data: {
    front: { text?: string; imgUrl?: string; };
    back: { text?: string; imgUrl?: string; };
  }
}