import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/products.slice";
import { store } from "../../store";
import { selectProducts } from "../../store/products.selectors";
import ProductCard from "./ProductCardComponent";

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
  // const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const products : any = useSelector(selectProducts)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: any = await axios.get(
          "http://localhost:2023/api/products"
        );
        const result = await response.data.products;
        dispatch(setProducts(result));
      } catch (error) {
        console.error("Error fetching products:", error);
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
      {products?.map((product : any) => (
        <ProductCard key = {product.id} id={product.id} title={product.title} image_url={product.image_url} description={product.description} price={product.price} available_amount={product.available_amount} />
        // <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        //   <Card>
        //     <CardMedia
        //       component="img"
        //       alt={product.title}
        //       height="140"
        //       image={product.image_url[0]}
        //     />
        //     <CardContent>
        //       <Typography variant="h6">{product.title}</Typography>
        //       <Typography variant="body2" color="text.secondary">
        //         {product.description}
        //       </Typography>
        //       <Typography variant="subtitle1" color="text.primary">
        //         Price: ${product.price}
        //       </Typography>
        //       <Typography variant="subtitle2" color="text.secondary">
        //         Available: {product.available_amount}
        //       </Typography>
        //     </CardContent>
        //     <CardActions>
        //       <IconButton>
        //         <RemoveIcon />
        //       </IconButton>
        //       <Typography variant="body1">1</Typography>
        //       <IconButton>
        //         <AddIcon />
        //       </IconButton>
        //       <Button
        //         variant="contained"
        //         color="primary"
        //         onClick={() => handleAddToCart(product.id)}
        //       >
        //         Add to Cart
        //       </Button>
        //     </CardActions>
        //   </Card>
        // </Grid>
      ))}
    </Grid>
  );
};

export default ProductsComponent;
