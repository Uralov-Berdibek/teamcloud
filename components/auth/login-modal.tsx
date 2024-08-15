'use client';

import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { AlertCircle } from 'lucide-react';
import { useCallback, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import Modal from '../shared/modal';
import Button from '../ui/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginModal() {
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const form = useForm();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();

  useEffect(() => {
    axios
      .get('http://localhost:8090/api/v1/user')
      .then((response) => {
        setData(response.data); // Javobdan olingan ma'lumotlarni state-ga saqlash
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.post('http://localhost:8090/api/v1/auth/authenticate', formData);

      // Save tokens to cookies/local storage
      localStorage.setItem('accessToken', response.data.accessToken);
      document.cookie = `refreshToken=${response.data.refreshToken}; path=/`;

      // Redirect to dashboard
      router.push(`/teams/berdibek`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  const bodyContent = (
    <Form {...form}>
      <form className='space-y-4 px-12' onSubmit={form.handleSubmit(onSubmit)}>
        {error && (
          <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Password' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button label={'Login'} type='submit' secondary fullWidth padding />
      </form>
    </Form>
  );

  const footer = (
    <div className='text-neutral-400 text-center mb-4'>
      <p>
        First time using Cloud?
        <span className='text-black cursor-pointer hover:underline' onClick={onToggle}>
          {' '}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footer}
    />
  );
}
