import { EnumOrderStatus } from '@prisma/client';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class OrderItemDto {
  @IsNumber()
  @ApiProperty({
    description: 'Quantity of the product',
    example: 7,
  })
  quantity: number;

  @IsNumber()
  @ApiProperty({
    description: 'ID of the product',
    example: 5,
  })
  productId: number;
}

export class OrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  @ApiProperty({
    description: 'Array of order items',
    type: OrderItemDto,
    isArray: true,
  })
  orderItems: OrderItemDto[];
}



// import { EnumOrderStatus } from '@prisma/client'
// import {
//   IsArray,
//   IsEnum,
//   IsNumber,
//   IsOptional,
//   ValidateNested
// } from 'class-validator'
// import { Type } from 'class-transformer'
// import { ApiProperty } from '@nestjs/swagger'

// export class OrderDto {
//   @IsOptional()
//   @IsEnum(EnumOrderStatus)
//   @ApiProperty({
//     description: 'Order status',
//     example: EnumOrderStatus.IN_CART
//   })
//   status: EnumOrderStatus

//   @IsArray()
//   @ValidateNested({ each: true })
//   @Type(() => OrderItemDto)
//   orderItems: OrderItemDto[]
// }

// export class OrderItemDto {
//   @IsNumber()
//   @ApiProperty({
//     description: 'Product quantity',
//     example: 7
//   })
//   quantity: number

//   @IsNumber()
//   @ApiProperty({
//     description: 'Product id',
//     example: 5
//   })
//   productId: number
// }


// import { EnumOrderStatus } from '@prisma/client'
// import {
//   IsArray,
//   IsEnum,
//   IsNumber,
//   IsOptional,
//   ValidateNested
// } from 'class-validator'
// import { Type } from 'class-transformer'
// import { ApiProperty } from '@nestjs/swagger'

// export class OrderDto {
//   @IsOptional()
//   @IsEnum(EnumOrderStatus)
//   @ApiProperty({
//     description: 'Order status',
//     example: EnumOrderStatus.IN_CART
//   })
//   status: EnumOrderStatus

//   @IsArray()
//   @ValidateNested({ each: true })
//   @Type(() => OrderItemDto)
//   orderItems: OrderItemDto[]
// }

// export class OrderItemDto {
//   @IsNumber()
//   @ApiProperty({
//     description: 'Product quantity',
//     example: 7
//   })
//   quantity: number

//   @IsNumber()
//   @ApiProperty({
//     description: 'Product price',
//     example: 500
//   })
//   price: number

//   @IsNumber()
//   @ApiProperty({
//     description: 'Product id',
//     example: 5
//   })
//   productId: number
// }
