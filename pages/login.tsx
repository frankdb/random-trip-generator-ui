import React, { useEffect } from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/use-auth';
import Layout from '../components/application-ui/layout/Layout';
import ContainerLayout from '../components/application-ui/layout/ContentLayout';
import TextInputGroup from '../components/application-ui/forms/TextInputGroup';
import Button from '../components/application-ui/elements/Button';

interface ILoginFormProps {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Minimum of 8 characters').required('Required'),
});

const Login = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('Auth===', auth);
  }, [auth]);

  const handleFormSubmit = async ({ email, password }: ILoginFormProps) => {
    try {
      const res = await auth.login(email, password);
      if (res) {
        router.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <ContainerLayout>
        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold">Login</h2>
          <p>
            Don't have an account?{' '}
            <span className="pointer">
              <Link href="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
        <div className="flex flex-col max-w-md p-4 mx-auto bg-white rounded-md shadow-sm sm:p-8">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <TextInputGroup
                  label="Email"
                  name="email"
                  id="email"
                  type="text"
                  placeholder="homersimpson@aol.com"
                  value={values.email}
                  onChange={handleChange}
                  throwError={errors.email && touched.email}
                  errorMessage={errors.email}
                />
                <TextInputGroup
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  throwError={errors.password && touched.password}
                  errorMessage={errors.password}
                />
                <Button
                  type="submit"
                  label="Log In"
                  isFullWidth
                  colorScheme="blue"
                  isLoading={isSubmitting}
                />
              </form>
            )}
          </Formik>
        </div>
      </ContainerLayout>
    </Layout>
  );
};

export default Login;
