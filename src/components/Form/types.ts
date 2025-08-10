import { type Image } from '../../types';


export type FormInputs = Omit<Image, 'id' | 'created_at'>;
