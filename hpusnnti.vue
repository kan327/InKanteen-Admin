<form @submit="onSubmit">
  <FormField v-slot="{ componentField }" name="username">
    <FormItem>
      <FormControl>
        <Input type="text" placeholder="shadcn" v-bind="componentField" />
      </FormControl> 
      <FormMessage class="text-black" />
    </FormItem>
  </FormField>
  <button type="submit">
  </button>
</form>



<div class="pt-0 sm:pt-5 p-5 md:p-9 gap-3 flex flex-col">
  <input type="email"
    class="text-sm p-3 md:p-5 md:text-base rounded-xl border-8B border-solid border-2 outline-3A4"
    placeholder="Your Email Here" name="Email" id="">
  <input type="text"
    class="text-sm p-3 md:p-5 md:text-base rounded-xl border-8B border-solid border-2 outline-3A4"
    placeholder="Password here" name="password" id="">
  <div class="flex flex-col items-center mt-2 md:mt-5">
    <div class="flex cursor-pointer select-none">
      <div class="bg-3A4 rounded-l-2xl px-4 py-3 relative border-white border-dashed border-r-[1px]">
        <Icon name="material-symbols:play-pass-sharp" color="#FFFFFF" size="24" />

        <div class="bg-white w-4 h-4 rounded-full absolute -top-2 -right-2 z-10"></div>
      </div>
      <div class="bg-3A4 rounded-r-2xl px-4 py-3 relative border-white border-dashed border-l-[1px]">
        <div class="bg-white w-4 h-4 rounded-full absolute -bottom-2 -left-2 z-10">
        </div>
        <div class="uppercase font-bold text-sm md:text-base text-white">Login</div>
      </div>

    </div>
    <div class="bg-5F h-8 w-8 mt-5"></div>
  </div>
</div>