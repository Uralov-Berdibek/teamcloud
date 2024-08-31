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
import ButtonAuth from '../shared/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginModal() {
  const [error, setError] = useState('');
  const form = useForm();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.post('http://localhost:8090/api/v1/auth/authenticate', formData);

      // Assuming the response contains accessToken and refreshToken
      const { accessToken, refreshToken } = response.data;

      // Store the tokens in localStorage or cookies for future requests
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Redirect to the dashboard
      router.push(`/teams/berdibek`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post('http://localhost:8090/api/v1/auth/refresh-token', {
        refreshToken,
      });

      // Update the access token
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);

      return accessToken;
    } catch (err) {
      console.error('Unable to refresh token', err);
      // Optionally redirect to login
    }
  };

  axios.interceptors.request.use(
    async (config) => {
      let accessToken = localStorage.getItem('accessToken');

      // Add access token to headers
      config.headers.Authorization = `Bearer ${accessToken}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        // Attempt to refresh the token
        const newAccessToken = await refreshAccessToken();

        axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }

      return Promise.reject(error);
    },
  );

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
        <ButtonAuth label={'Login'} type='submit' secondary fullWidth padding />
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
