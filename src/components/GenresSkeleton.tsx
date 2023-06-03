import { ScrollArea, Skeleton } from "@mantine/core";

const GenresSkeleton = () => {
  return (
    <ScrollArea>
      {new Array(10).fill(1).map((_, idx) => {
        return <Skeleton key={idx} m={10} height={30} />;
      })}
    </ScrollArea>
  );
};

export default GenresSkeleton;
