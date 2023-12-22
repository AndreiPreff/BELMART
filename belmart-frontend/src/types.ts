// types.ts

export interface Product {
    id: number;
    title: string;
    description?: string;
    price: number;
    image_url: string[];
    available_amount: number;
    orderItem: OrderItem[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface OrderItem {
    id: number;
    quantity: number;
    price: number;
    orderId?: number;
    product?: Product;
    createdAt: string;
    updatedAt: string;
  }
  
  export enum EnumOrderStatus {
    IN_CART,
    COMPLETED,
    CANCELED,
  }
  
  export interface Order {
    id: number;
    status: EnumOrderStatus;
    totalAmount: number;
    orderItems: OrderItem[];
    user?: User;
    userId?: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export enum EnumUserRoles {
    USER,
    ADMIN,
  }
  
  export interface User {
    id: number;
    email: string;
    password: string;
    role: EnumUserRoles;
    first_name?: string;
    last_name?: string;
    phone: string;
    orders: Order[];
    createdAt: string;
    updatedAt: string;
  }
  