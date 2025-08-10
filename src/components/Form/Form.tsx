import { useState } from 'react';
import {
  useForm,
  Form,
  Grid,
  FormTextField,
  FormCheckbox,
  FormTextArea,
} from '@astral/ui';
import { object, string, min, max, optional } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { observer } from 'mobx-react-lite';

import { type Image } from '../../types';
import { imagesStore } from '../../imagesStore';

import { SubmitButton } from './styles';
import { type FormInputs } from './types';

const validationSchema = object<FormInputs>({
  name: string(min(5), max(40)),
  link: string(),
  description: optional(string(min(20), max(200))),
});

export const ImageForm: React.FC = observer(() => {
  const [hasDescription, setHasDescription] = useState(false);

  const form = useForm<FormInputs>({
    resolver: resolver<FormInputs>(validationSchema),
  });

  const handleSubmit = (values: FormInputs) => {
    let image: Image = { ...values, id: 0, created_at: new Date() };

    imagesStore.addImage(image);
    form.reset();
    setHasDescription(false);
  };

  return (
    <Form noValidate form={form} onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container rowSpacing={2} columnSpacing={4} columns={2}>
        <FormTextField
          required
          label="Название фото"
          placeholder="Введите название фото"
          control={form.control}
          name="name"
        />

        <FormTextField
          required
          label="Ссылка на фото"
          type="url"
          placeholder="Введите ссылку на фото"
          control={form.control}
          name="link"
        />

        <FormCheckbox
          required
          title="Описание"
          checked={hasDescription}
          onChange={(e) => setHasDescription(e.currentTarget.checked)}
          name="has_description"
        />

        {hasDescription && (
          <FormTextArea
            required
            label="Описание фото"
            control={form.control}
            rows={5}
            name="description"
          />
        )}
      </Grid>
      <SubmitButton>Добавить фото</SubmitButton>
    </Form>
  );
});
