import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";
import { CartManager } from "../utils/CartManager";
import { TokenManager } from "../utils/TokenManager";
import { OrderManager } from "../utils/OrderManager";

export class OrderApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async createOrder(customerName: string): Promise<APIResponse> {
    const response = await this.post(
      "/orders",
      {
        cartId: CartManager.getCartId(),
        customerName,
      },
      {
        Authorization: `Bearer ${TokenManager.getToken()}`,
      }
    );

    const body = await response.json();
    OrderManager.setOrderId(body.orderId);

    return response;
  }
}