import React, { useState, useEffect } from 'react';
import { EnumOrderStatus, User } from '../../types';



const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Замените '/api/user' на ваш реальный эндпоинт, который возвращает данные пользователя
        const response = await fetch('/api/user', {
          headers: {
            // Добавьте заголовки аутентификации, если это необходимо
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData: User = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const renderOrderStatus = (status: EnumOrderStatus) => {
    switch (status) {
      case EnumOrderStatus.IN_CART:
        return 'In Cart';
      case EnumOrderStatus.COMPLETED:
        return 'Completed';
      case EnumOrderStatus.CANCELED:
        return 'Canceled';
      default:
        return 'Unknown';
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <p>First Name: {user.first_name || 'N/A'}</p>
          <p>Last Name: {user.last_name || 'N/A'}</p>
          <p>Phone: {user.phone}</p>

          <h3>Orders:</h3>
          {user.orders.length > 0 ? (
            <ul>
              {user.orders.map((order) => (
                <li key={order.id}>
                  <p>Status: {renderOrderStatus(order.status)}</p>
                  <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
                  <p>Created At: {order.createdAt}</p>
                  <p>Updated At: {order.updatedAt}</p>
                  <h4>Order Items:</h4>
                  {order.orderItems.length > 0 ? (
                    <ul>
                      {order.orderItems.map((item) => (
                        <li key={item.id}>
                          {/* Отобразите данные элемента заказа, например, item.quantity, item.price и т. д. */}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No order items available.</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders available.</p>
          )}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
