import React from "react";
import { Game } from "../services/gameService";
import {
  Card,
  Group,
  Badge,
  Skeleton,
  Text,
  Image,
  Title,
  useMantineTheme,
} from "@mantine/core";
import PlatformList from "./PlatformList";
import { Link } from "react-router-dom";

export const GameCardTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Card
      shadow='sm'
      padding='lg'
      radius='md'
      withBorder
      m='auto'
      maw={"min(400px , 90vw)"}
    >
      {children}
    </Card>
  );
};
type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  const theme = useMantineTheme();
  console.log(game);

  return (
    <GameCardTemplate>
      <Link to={`/games:${game.id}`}>
        <Card.Section
          sx={{
            position: "relative",
            overflow: "hidden",
            "& img": { transition: "transform 200ms" },
            "&:hover img": {
              transform: "scale(1.2)",
            },
            "&:hover h1": {
              top: 0,
            },
          }}
        >
          <Image src={game.background_image} height={160} alt={game.name} />
          <Title
            size={"md"}
            order={1}
            p='sm'
            color='white'
            bg={theme.fn.rgba("dark", 0.5)}
            sx={{
              position: "absolute",
              width: "100%",
              top: "-50%",
              transition: "all 400ms",
            }}
          >
            {game.name}
          </Title>
        </Card.Section>
      </Link>
      <Group position='right' mt='md' mb='xs'>
        <Text weight={500}>critic</Text>
        <Badge
          color={
            game.metacritic >= 90
              ? "green"
              : game.metacritic >= 70
              ? "yellow"
              : "pink"
          }
          variant='light'
        >
          {game.metacritic}
        </Badge>
      </Group>
      <PlatformList platforms={game.platforms.map((p) => p.platform)} />
    </GameCardTemplate>
  );
};

export default GameCard;
