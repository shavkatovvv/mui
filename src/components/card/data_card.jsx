import React from "react";
import { products } from "../../data/product-data";
import { Container, Rating, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const Data_card = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id == parseInt(id));
    return (
        <Container sx={{ mt: "100px", mb: "100px" }}>
            <Typography mb={"8px"} variant="h2">
                Elexus Semerkant 1763 Coken Orta Beige
            </Typography>
            <Stack
                mb={"43px"}
                direction={"row"}
                alignItems={"center"}
                gap={"8px"}
            >
                <Rating value={product.raiting} precision={0.5} />
            </Stack>
            <Stack direction="column" width={"430px"}>
                <img src={product.img} alt="photo" />
            </Stack>
        </Container>
    );
};
