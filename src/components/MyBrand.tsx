import { Box, Image, createStyles, keyframes } from "@mantine/core";
import MyLogo from "../assets/my-brand.png";

const rotate = keyframes({
  "0%": { transform: "rotatey(0deg)" },
  "100%": { transform: "rotatey(360deg)" },
});

const useStyles = createStyles(() => ({
  cardContainer: {
    width: 50,
    height: 50,
    transformStyle: "preserve-3d",
    animation: `${rotate} 9s linear infinite`,
  },
  card: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "50%",
    overflow: "hidden",
  },
  backFace: {
    transform: "rotatey(180deg)",
  },
}));

const MyBrand = () => {
  const { classes, cx } = useStyles();
  return (
    <Box
      sx={{
        perspective: 800,
        perspectiveOrigin: "center",
        height: 50,
      }}
    >
      <Box className={classes.cardContainer}>
        <Image src={MyLogo} className={classes.card} />
        <Image src={MyLogo} className={cx(classes.card, classes.backFace)} />
      </Box>
    </Box>
  );
};

export default MyBrand;
