import { Stack, Text, Title } from "@mantine/core";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();

  if (isRouteErrorResponse(err))
    return (
      <Stack mih={"100vh"} justify='center'>
        <Title ta={"center"} fz={"calc(2rem + 10vw)"} order={1}>
          404
        </Title>
        <Text component='p' ta={"center"} fz={"calc(1rem + 10vw)"}>
          page not found
        </Text>
      </Stack>
    );

  return (
    <>
      <h1>Error</h1>
      <p>{(err as Error).message}</p>
    </>
  );
};

export default ErrorElement;
