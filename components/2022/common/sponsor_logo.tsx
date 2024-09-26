import { AspectRatio, Box, Image, Link } from "@chakra-ui/react";

export function SponsorLogo(props: {
  size: string;
  url: string;
  logoImagePath: string;
  alt: string;
  padding: number;
}) {
  return (
    <Link href={props.url} target="_blank">
      <AspectRatio flex={1} ratio={1} width={props.size} maxWidth={props.size}>
        <Box bgColor={"white"} borderRadius={"full"}>
          <Image
            src={props.logoImagePath}
            width={"100%"}
            height={"100%"}
            paddingLeft={props.padding}
            paddingRight={props.padding}
            objectFit={"contain"}
            borderRadius={"full"}
            alt={props.alt}
          />
        </Box>
      </AspectRatio>
    </Link>
  );
}