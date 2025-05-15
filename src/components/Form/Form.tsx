import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  FormWrapper,
  Field,
  Input,
  ErrorText,
  SubmitButton,
  TextArea,
  Label,
  CheckBoxField,
} from './styles';
import { type FormProps, type FormInputs } from './types';

export const Form: React.FC<FormProps> = ({ addImage }) => {

  const [has_description, setHasDescription] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();
  
  const onSubmit: SubmitHandler<FormInputs> = (image) => {
    image.created_at = new Date();
    addImage(image);
    reset();
    setHasDescription(false);
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label>Название фото</Label>
        <Input type='text' placeholder='Введите название фото' {...register('name', { required: true })} />
        {errors.name ? <ErrorText>Обязательно</ErrorText> : <ErrorText>&nbsp;</ErrorText>}
      </Field>

      <Field>
        <Label>Ссылка на фото</Label>
        <Input type='url' placeholder='Введите ссылку на фото' {...register('link', { required: true })} />
        {errors.link ? <ErrorText>Обязательно</ErrorText> : <ErrorText>&nbsp;</ErrorText>}
      </Field>

      <CheckBoxField>
        <input
          type='checkbox'
          checked={has_description}
          onChange={(e) => setHasDescription(e.currentTarget.checked)}
        />
        <Label>Описание</Label>
      </CheckBoxField>

      {has_description && (
        <Field>
          <Label>Описание фото</Label>
          <TextArea
            rows={5}
            {...register('description', { required: true })}
          />
        {errors.description ? <ErrorText>Обязательно</ErrorText> : <ErrorText>&nbsp;</ErrorText>}
        </Field>
      )}

      <SubmitButton type='submit'>Добавить фото</SubmitButton>
    </FormWrapper>
  );
};
