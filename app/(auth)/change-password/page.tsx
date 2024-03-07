import { Button } from '@/components/ui/button';
import ForgotForm from '@/containers/auth/forgot-form';
import Link from 'next/link';
import { Suspense } from 'react';

const ResetPassword = () => {
  return (
    <>
      <div className="text-lg md:text-2xl font-semibold mx-auto relative md:mt-20">
        Нууц үг солих
      </div>
      <div className="mb-auto mx-auto mt-4 md:mt-8 w-full sm:max-w-md">
        <div className="md:border md:rounded-xl w-full sm:py-10 px-3 sm:px-10 space-y-5 bg-white">
          <Suspense>
            <ForgotForm />
          </Suspense>
        </div>
      </div>
      <div className="mt-8 text-center text-sm relative md:mb-20">
        <Button variant="link" className="text-sm" asChild>
          <Link href="/signup">Нэвтрэх?</Link>
        </Button>
      </div>
    </>
  );
};

export default ResetPassword;