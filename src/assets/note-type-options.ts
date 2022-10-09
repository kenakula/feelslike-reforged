import { NoteType, SelectOption } from 'app/types';

export const noteTypesOptions: SelectOption<NoteType>[] = [
  { value: 'feel', label: 'Про чувства' },
  { value: 'regular', label: 'Запись дневника' },
  { value: 'quiz', label: 'Опрос' },
];
