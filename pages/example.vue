<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useCreateUserAccount } from '@/lib/vueQuery/queriesAndMutations'
const { mutateAsync: createUserAccount, isPending: isCreatingUser } = useCreateUserAccount()

const formSchema = toTypedSchema(z.object({
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5).max(50),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  const session = await createUserAccount(values)
  console.log(session)
})
</script>

<template>
  <form class="w-2/3 space-y-6" @submit="onSubmit">
    <FormField v-slot="{ componentField: nameField }" name="name">
      <FormItem>
        <FormLabel>name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="nameField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField: emailField }" name="email">
      <FormItem>
        <FormLabel>email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="email" v-bind="emailField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField: passwordField }" name="password">
      <FormItem>
        <FormLabel>password</FormLabel>
        <FormControl>
          <Input type="text" placeholder="password" v-bind="passwordField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>