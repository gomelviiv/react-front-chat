import { ApiController } from '../api.controller';

const useRegistration = () => {
  const registerUser = (
    login: string,
    password: string,
    email: string,
    image: string,
  ) => {
    try {
      ApiController.postApiCall(
        process.env.BACK_URL,
        {
          login,
          password,
          email,
          image,
        },
        {},
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { registerUser };
};

export default useRegistration;
