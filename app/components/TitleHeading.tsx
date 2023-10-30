import { Box, Typography } from "@mui/material";

interface TitleHeadingProps {
    title: string
    subTitle: string
    height: string
}

export default function TitleHeading({ title, subTitle, height }: TitleHeadingProps) {
    return (
        <Box 
            height={height}
            width="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            flexGrow={1}
            display="flex"
        >
            <Typography variant="h5">{title}</Typography>
            <Typography>{subTitle}</Typography>
        </Box>
    )
}