import React, { useState } from 'react';

import { ApiController } from '../api.controller';

const useUsers = () => {
  const [users, setUsers] = useState(null);

  const getAllUsers = () => {
    const response = ApiController.getApiCall(process.env.BACK_URL);
  };

  // const getUserById = (id) => {
  //   const response = ApiController.getApiCall(`${process.env.BACK_URL}/${id}`);
  // };

  // const deleteUserById = (id) => {
  //   const response = ApiController.getApiCall(`${process.env.BACK_URL}/${id}`);
  // };

  // const putUserById = (id) => {
  //   const response = ApiController.getApiCall(`${process.env.BACK_URL}/${id}`);
  // };
  return { getAllUsers };
};

export default useUsers;
