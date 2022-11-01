import moment from "moment";
import { CartItem } from "@my-webshop/shared";
import ReceiptTable from "./ReceiptTable";

export default function ReceiptList(props: {
  cartItems: CartItem[] | undefined;
}) {
  return (
    <div className="receipt-list">
      {props.cartItems &&
        props.cartItems?.map((item) => {
          return (
            <>
              <p>
                Total: {item.bill} SEK,{" "}
                {moment(item.updatedAt.toString()).format("L")}
              </p>
              {item.products.map((product) => {
                return <ReceiptTable product={product}></ReceiptTable>;
              })}
            </>
          );
        })}
    </div>
  );
}
