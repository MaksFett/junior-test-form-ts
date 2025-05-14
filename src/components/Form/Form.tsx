import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SubmitButton } from './styles';
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
    addImage(image);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Введите название фото' {...register("name", { required: true })} />
      {errors.name && <span>Обязательно</span>}

      <input type='url' placeholder='Введите ссылку на фото' {...register("link", { required: true })} />
      {errors.link && <span>Обязательно</span>}

      <input type='checkbox' checked={has_description} onChange={(e) => setHasDescription(e.currentTarget.checked)}/>

      {has_description && <input type='text' placeholder='' {...register("description", {required: true})}/>}

      <SubmitButton type="submit"> Добавить фото </SubmitButton>
    </form>
  );
};
