import { DivinePlusComponent } from "../component";

export declare class DvMessage extends DivinePlusComponent {
  message: string | object;
  type: string;
  duration: number;
  showClose: boolean;
  id: string;
  zIndex: number;
  offset: number;
  onClose: () => void;
}
