"use client"
import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { formSchema } from './constant'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


const Conversation = () => {

  const form = useForm<z.infer<typeof formSchema>>({

    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

  }



  return (
    <div>
        <Heading 
        title='Conversation'
        description="Most advanced conversation model"
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
        />

        <div className="px-4 lg:px-8">
            <div>
              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} 
              className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'>
              <FormField  name='prompt' render={({field}) =>(
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className='m-0 p-0'>
                    <Input 
                    className='pl-2 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                      disabled={isLoading}
                      placeholder='What is the radius of the heart' 
                      {...field}
                      />
                  </FormControl>
                </FormItem>
              )} />
              <Button className='col-span-12 lg:col-span-2'>Generate</Button>
              </form>
              </Form>
            </div>
        </div>
    </div>
  )
}

export default Conversation