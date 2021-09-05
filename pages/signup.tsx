import React, { useEffect } from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/use-auth';
import TextInputGroup from '../components/application-ui/forms/TextInputGroup';
import Button from '../components/application-ui/elements/Button';
import Layout from '../components/application-ui/layout/Layout';
import ContainerLayout from '../components/application-ui/layout/ContentLayout';

interface ISignupFormProps {
  name: string;
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Minimum of 8 characters').required('Required'),
});

function Signup() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('Auth===', auth);
  }, [auth]);

  const handleFormSubmit = async ({
    name,
    email,
    password,
  }: ISignupFormProps) => {
    try {
      const res = await auth.signup(name, email, password);
      if (res) {
        router.push('/onboarding');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <ContainerLayout>
        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold">Sign up</h2>
          <p>
            Already have an account?{' '}
            <span className="pointer">
              <Link href="/login">Log in</Link>
            </span>
          </p>
        </div>
        <div className="flex flex-col max-w-md p-4 mx-auto bg-white rounded-md shadow-sm sm:p-8">
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={SignupSchema}
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
                  label="Full Name"
                  name="name"
                  id="name"
                  placeholder="Homer Simpson"
                  value={values.name}
                  onChange={handleChange}
                  throwError={errors.name && touched.name}
                  errorMessage={errors.name}
                />
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
                  label="Get Started"
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
}

export default Signup;
