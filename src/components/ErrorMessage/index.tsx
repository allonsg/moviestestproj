import { FC } from "react";
import { NotFoundMessage } from "./ErrorMessage.styled";

const ErrorMessage: FC = () => {
  return <NotFoundMessage>No movies found for your request</NotFoundMessage>;
};

export default ErrorMessage;
