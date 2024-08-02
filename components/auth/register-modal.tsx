import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import Button from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import Modal from '../shared/modal';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // or 'react-router-dom' if using React Router
import axios from 'axios';

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
  const router = useRouter();

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const handleNextStep = () => {
    setStep(2);
  };

  const bodyContent =
    step === 1 ? (
      <RegisterStep1 setData={setData} setStep={handleNextStep} />
    ) : (
      <RegisterStep2 data={data} onSuccess={() => router.push('/dashboard')} />
    );

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

function RegisterStep1({
  setData,
  setStep,
}: {
  setData: (data: any) => void;
  setStep: () => void;
}) {
  const [error, setError] = useState('');
  const form = useForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.post('http://localhost:8090/api/v1/auth/register', formData);
      setData(formData); // Save the data for the next step
      setStep(); // Move to the next step
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Form {...form}>
      <form className='space-y-4 px-12' onSubmit={handleSubmit(onSubmit)}>
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
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='First name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastname'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Last name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
        <div className='flex items-center gap-2'>
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
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Confirm Password' type='password' {...field} />
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

function RegisterStep2({ data, onSuccess }: { data: any; onSuccess: () => void }) {
  const [error, setError] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const form = useForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.get('http://localhost:8090/api/v1/auth/activate-account', {
        params: { token: formData.confirmationCode },
      });
      // Save tokens to cookies/local storage
      localStorage.setItem('accessToken', response.data.accessToken);
      document.cookie = `refreshToken=${response.data.refreshToken}; path=/`;
      onSuccess(); // Redirect to dashboard
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Form {...form}>
      <form className='space-y-4 px-12' onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <FormField
          control={form.control}
          name='confirmationCode'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Confirmation Code' {...field} />
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
