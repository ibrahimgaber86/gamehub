import { Stack, Text, Title } from "@mantine/core";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();

  if (isRouteErrorResponse(err))
    return (
      <Stack mih={"100vh"} justify='center'>
        <Title ta={"center"} order={1} size={"3rem"}>
          404
        </Title>
        <Text component='p' ta={"center"} size={"2rem"}>
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
