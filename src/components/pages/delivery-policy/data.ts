/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface DeliveryPolicySection {
  title: string;
  description?: string;
  items?: string[];
}

export interface IDeliveryPolicyData {
  pageUid: string;
  pageName: string;
  title: string;
  lastUpdatedLabel: string;
  sections: DeliveryPolicySection[];
  helpTitle: string;
  helpDescription: string;
  supportEmail: string;
  supportPhone: string;
}

export interface DeliveryPolicyPayload extends IDeliveryPolicyData {
  paddingX: number;
  paddingY: number;
}

export interface DeliveryPolicyProps {
  data?: IDeliveryPolicyData | DeliveryPolicyPayload | string;
}

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataDeliveryPolicy: IDeliveryPolicyData = {
  pageUid: "delivery-policy-uid",
  pageName: "NexaMart delivery information",
  title: "Delivery Information",
  lastUpdatedLabel: "",
  sections: [],
  helpTitle: "Contact NexaMart",
  helpDescription: "Delivery details have not been provided. Contact NexaMart at example@gmail.com or 01711111111.",
  supportEmail: "example@gmail.com",
  supportPhone: "01711111111",
};

export const defaultDeliveryPolicySection: DeliveryPolicySection = {
  title: "New Policy Section",
  description: "Write the policy details for this section.",
  items: [],
};
