import { FormLabel } from '@mui/material';
import React, { FC } from 'react';
import WarningIcon from '@mui/icons-material/Warning';

interface IProps {
  fieldName: string;
}

const FormLabelError: FC<IProps> = ({ fieldName }) => {
  return (
    <FormLabel
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      color="error"
    >
      <WarningIcon color="error" /> {fieldName} field is required
    </FormLabel>
  );
};

export default FormLabelError;
