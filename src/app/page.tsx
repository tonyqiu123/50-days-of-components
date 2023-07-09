'use client'

import styles from './page.module.css'
import Button from '@/components/Button/Button'


export default function Home() {

  async function exampleAsyncFunc() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Introduce a 2-second delay
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <> 
      <Button text='Primary' variant='primary' handleClick={exampleAsyncFunc} />
      <Button text='Secondary' variant='secondary' handleClick={exampleAsyncFunc} />
      <Button text='Destructive' variant='destructive' handleClick={exampleAsyncFunc} />
      <Button text='Cancel' variant='cancel' handleClick={exampleAsyncFunc} />
      <Button text='Warning' variant='warning' handleClick={exampleAsyncFunc} />
      <Button text='Success' variant='success' handleClick={exampleAsyncFunc} />
    </>
  )
}
