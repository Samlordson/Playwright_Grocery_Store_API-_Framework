import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";
import { CartManager } from "../utils/CartManager";
import { TokenManager } from "../utils/TokenManager";
import { OrderManager } from "../utils/OrderManager";
import { ClientManager } from "../utils/ClientManager";

export class OrderApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async createOrder(): Promise<APIResponse> {

    const response = await this.post(
        "/orders",
        {
            cartId: CartManager.getCartId(),
            customerName: ClientManager.getCustomerName()
        },
        {
            Authorization: `Bearer ${TokenManager.getToken()}`
        }
    );

    const body = await response.json();

    OrderManager.setOrderId(body.orderId);

    return response;
}
  async getAllOrders(): Promise<APIResponse> {
    const response = await this.get(
        "/orders",
        {
            Authorization: `Bearer ${TokenManager.getToken()}`
        }
    );
    return response;
}
async getOrder(): Promise<APIResponse> {
    const response = await this.get(
        `/orders/${OrderManager.getOrderId()}`,
        {
            Authorization: `Bearer ${TokenManager.getToken()}`
        }
    );
    return response;
}
async updateOrder(comment: string): Promise<APIResponse> {
    const response = await this.patch(
        `/orders/${OrderManager.getOrderId()}`,
        {
            comment
        },
        {
            Authorization: `Bearer ${TokenManager.getToken()}`
        }
    );
    return response;
}

async deleteOrder(): Promise<APIResponse> {
    return await this.delete(
        `/orders/${OrderManager.getOrderId()}`,
        {
            cartId: CartManager.getCartId(),
            customerName: ClientManager.getCustomerName()
        },
        {
            Authorization: `Bearer ${TokenManager.getToken()}`
        }
    );
}
}