export interface Posdata {
  Branch_Code: number;
  TRANS_NO: number;
  ITEM_OPTION: string;
  FULL_UPOS: string;
  ACCT_NO?: any;
  DIR_FLAG?: any;
  SUB_GROUP: string;
  Item_Desc: string;
  VALUE: number;
  SALE_INDICATOR: number;
  RETURN_INDICATOR: number;
  GIFT_RECEIPT: number;
  DISCOUNT_INDICATOR: number;
  SALESPERSON: number;
  TRANS_TIME: number;
  TillNumber: number;
  Tender_Type: string;
  trans_date: string;
  trans_ID: number;
  order_indicator: number;
  correct_indicator: number;
  nor_indicator: number;
  promo_code?: any;
  PromoDiscountRate?: any;
  PromoDiscountValue?: any;
  SundryCode?: any;
  SundryValue?: any;
}