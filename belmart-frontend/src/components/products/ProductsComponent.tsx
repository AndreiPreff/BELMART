import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
  Grid,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image_url: string[];
  available_amount: number;
  createdAt: string;
}

const ProductsComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2023/api/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId: number) => {
    // Implement logic to add the product to the shopping cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              alt={product.title}
              height="140"
              image={product.image_url[0]}
            />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                Price: ${product.price}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Available: {product.available_amount}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1">1</Typography>
              <IconButton>
                <AddIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsComponent;
