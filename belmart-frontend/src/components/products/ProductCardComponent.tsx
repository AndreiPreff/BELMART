import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { FC, useState } from "react";
import axios from "axios";

const ProductCard : FC<any> = ({
  id,
  title,
  image_url,
  description,
  price,
  available_amount,
}) => {
    const [amount, setAmount] = useState(1)

    const handleAtOrder = async () => {
        try {
          const response: any = await axios.post(
            "http://localhost:2023/api/orders",
            {
                orderItems: 
                [
                    {
                      quantity: amount,
                      productId: id
                    }
                  ] 
            }, {
                headers: {
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJwcmVmZjhAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDMyNTg5OTksImV4cCI6MTcwMzI2MjU5OX0.wCUVzKsLmv2kyhpityiy1eOJw3LSwcoX4uwI49oyfTw' 
                }
            }

            
          );
          console.log(response)
                    
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image_url[0]}
        />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            Price: ${price}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Available: {available_amount}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton disabled = {amount === 1} onClick={() => setAmount(amount - 1)}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1">{amount}</Typography>
          <IconButton disabled = {amount === available_amount} onClick={() => setAmount(amount + 1)}>
            <AddIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAtOrder()}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ProductCard;
