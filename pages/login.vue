<script setup lang="ts">
import Default from '~/layouts/Default.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSignInAccount, useUserContext } from '@/lib/vueQuery/queriesAndMutations'
import msgHandler from '@/lib/msghandler'


// const { data: checkAuthUser, isLoading: isUserLoading } = useUserContext()
const { mutateAsync: signInAccount } = useSignInAccount()
const { mutateAsync: userContext } = useUserContext()

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string(),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  const session = await signInAccount({
    email: values.email,
    password: values.password
  })
  console.log(session.success)

  if (!session.success) {
    return msgHandler("Login failed, please try again", "warn")
  }else{
    navigateTo({ path: `/` });
  }

})
</script>

<template>
  <Default>
    <div class="bg-32C w-screen h-screen flex justify-center items-center">
      <div class="text-base w-[95%] sm:w-3/4 lg:w-1/2 max-w-xl">
        <div class="relative bg-white shadow-sha rounded-t-2xl mx-6 border-32C border-dashed sm:border-b-2 sm:p-4">
          <img src="/images/H-Logo.png" class="select-none object-fill mx-auto" width="200" height="86" alt="">
          <div class="bg-32C w-12 h-12 hidden sm:block rounded-full absolute -bottom-6 -left-6 z-10"></div>
        </div>
        <div class="relative bg-white shadow-sha rounded-b-2xl mx-6 border-32C border-dashed sm:border-t-2">
          <div class="bg-32C w-12 h-12 hidden sm:block rounded-full absolute -top-6 -right-6"></div>
          <form @submit="onSubmit">
            <div class="pt-0 sm:pt-5 p-5 md:p-9 gap-3 flex flex-col md:w-5/6 mx-auto">
              <FormField v-slot="{ componentField: emailField }" name="email">
                <FormItem>
                  <FormControl>
                    <Input type="email"
                      class="text-sm p-3 md:p-5 md:text-base rounded-xl border-8B border-solid border-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      placeholder="Email" v-bind="emailField" />
                  </FormControl>
                  <div class="text-5F">
                    <FormMessage />
                  </div>
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField: passwordField }" name="password">
                <FormItem>
                  <FormControl>
                    <Input type="password"
                      class="text-sm p-3 md:p-5 md:text-base rounded-xl border-8B border-solid border-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      placeholder="Password" v-bind="passwordField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <Button type="submit"
                class="flex cursor-pointer select-none mx-auto w-fit bg-transparent hover:bg-transparent p-0">
                <div class="bg-3A4 rounded-l-2xl px-4 py-3 relative border-white border-dashed border-r-[1px]">
                  <Icon name="material-symbols:play-pass-sharp" color="#FFFFFF" size="24" />

                  <div class="bg-white w-4 h-4 rounded-full absolute -top-2 -right-2 z-10"></div>
                </div>
                <div class="bg-3A4 rounded-r-2xl px-4 py-3 relative border-white border-dashed border-l-[1px]">
                  <div class="bg-white w-4 h-4 rounded-full absolute -bottom-2 -left-2 z-10">
                  </div>
                  <div class="uppercase font-bold text-sm md:text-base text-white">Login</div>
                </div>
              </Button>
            </div>
          </form>


        </div>
      </div>
    </div>
  </Default>
</template>
