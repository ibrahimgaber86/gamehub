import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import {
  Button,
  Center,
  Grid,
  Image,
  Loader,
  Spoiler,
  Text,
} from "@mantine/core";

import {
  useGame,
  useGameScreenShots,
  useGameTrailers,
} from "../hooks/useGames";
import getCroppedImageUrl from "../services/imageService";

const GamePage = () => {
  const { id = "-1" } = useParams();
  const { data: game } = useGame(parseInt(id));
  const {
    data: screenShots,
    isError,
    error: screenShotsError,
    isLoading: screenShotsLoading,
  } = useGameScreenShots(parseInt(id));

  const { data: trailers = [] } = useGameTrailers(parseInt(id));

  if (isError) return <Text>{(screenShotsError as AxiosError).message}</Text>;
  if (screenShotsLoading)
    return (
      <Center>
        <Loader />
      </Center>
    );

  return (
    <Grid>
      <Grid.Col sm={12} md={6}>
        <Text size={"xl"}>{game?.name}</Text>
        <Spoiler
          p={"md"}
          maxHeight={120}
          hideLabel={<Button my={"md"}>hide</Button>}
          showLabel={<Button my={"md"}>show more ..</Button>}
        >
          {parse(game?.description || "")}
        </Spoiler>
        {game?.website && (
          <Text my={"md"}>
            <a href={game?.website} target='_blank'>
              {game?.website}
            </a>
          </Text>
        )}
      </Grid.Col>
      <Grid.Col sm={12} md={6}>
        <Text size={"lg"}>Game Screen Shoot</Text>
        <Grid>
          {screenShots?.map((img) => (
            <Grid.Col sm={12} md={6} key={img.id}>
              <Image
                src={getCroppedImageUrl(img.image)}
                imageProps={{ loading: "lazy" }}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Grid.Col>
      {trailers?.[0]?.data && (
        <Grid.Col span={12}>
          <Text>Game Trailer</Text>
          <video
            src={trailers?.[0].data["480"]}
            controls
            poster={trailers?.[0].preview}
            width={"100%"}
          />
        </Grid.Col>
      )}
    </Grid>
  );
};

export default GamePage;
