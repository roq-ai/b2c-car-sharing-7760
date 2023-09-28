import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createOperationsDashboard } from 'apiSdk/operations-dashboards';
import { operationsDashboardValidationSchema } from 'validationSchema/operations-dashboards';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { OperationsDashboardInterface } from 'interfaces/operations-dashboard';

function OperationsDashboardCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: OperationsDashboardInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createOperationsDashboard(values);
      resetForm();
      router.push('/operations-dashboards');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<OperationsDashboardInterface>({
    initialValues: {
      dashboard_name: '',
      dashboard_description: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: operationsDashboardValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Operations Dashboards',
              link: '/operations-dashboards',
            },
            {
              label: 'Create Operations Dashboard',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Operations Dashboard
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.dashboard_name}
            label={'Dashboard Name'}
            props={{
              name: 'dashboard_name',
              placeholder: 'Dashboard Name',
              value: formik.values?.dashboard_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.dashboard_description}
            label={'Dashboard Description'}
            props={{
              name: 'dashboard_description',
              placeholder: 'Dashboard Description',
              value: formik.values?.dashboard_description,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/operations-dashboards')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'operations_dashboard',
    operation: AccessOperationEnum.CREATE,
  }),
)(OperationsDashboardCreatePage);
