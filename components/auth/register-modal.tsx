import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { registerStep1Schema, registerStep2Schema } from '@/lib/validation';
import { AlertCircle, Divide } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import Button from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import Modal from '../shared/modal';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterModal() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent =
    step === 1 ? <RegisterStep1 setData={[]} setStep={1} /> : <RegisterStep2 data={data} />;

  const footer = (
    <div className='text-neutral-400 text-center mb-4'>
      <p>
        Already have an account?{' '}
        <span className='text-black cursor-pointer hover:underline' onClick={onToggle}>
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      body={bodyContent}
      footer={footer}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      step={step}
      totalSteps={2}
    />
  );
}

function RegisterStep1({ setData, setStep }: { setData: []; setStep: 1 }) {
  const [error, setError] = useState('');
  const form = useForm();

  return (
    <Form {...form}>
      <form className='space-y-4 px-12'>
        {error && (
          <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className='flex items-center gap-2'>
          <FormField
            control={form.control}
            name='firstname'
            render={({}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='First name' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastname'
            render={({}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Last name' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({}) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex items-center gap-2'>
          <FormField
            control={form.control}
            name='password'
            render={({}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Password' type='password' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Password' type='password' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button label={'Next'} type='submit' secondary fullWidth padding />
      </form>
    </Form>
  );
}

function RegisterStep2({ data }: { data: { firstname: string; lastname: string; email: string } }) {
  const [error, setError] = useState('');
  const registerModal = useRegisterModal();
  const form = useForm();

  return (
    <Form {...form}>
      <form className='space-y-4 px-12'>
        {error && (
          <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <FormField
          control={form.control}
          name='email_password'
          render={({}) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Password' type='password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button label={'Register'} type='submit' secondary fullWidth padding />
      </form>
    </Form>
  );
}
