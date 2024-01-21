import { Estimate } from "../App";
import styles from './Card.module.css';

type cardProps = {
  data: Estimate;
};

export default function Card({ data }: cardProps) {
  function calculateSubtotal(quantity: number, unitPrice: number) {
    return (quantity * unitPrice).toFixed(2);
  }
  return (
    <>
    <div className={styles.card}>
      <h3>{data.title}</h3>
      <div className={styles.container}>
        <div className={styles.estimateheader}>
          <div>Reference</div>
          <div>Description</div>
          <div>Quantity</div>
          <div>Unit Price</div>
          <div>Deposit</div>
          <div>VAT</div>
          <div>Sub-Total</div>
        </div>
        {data.tasks.map((t) => {
          return (
            <div key={t.reference} className={styles.details}>
              <div>{t.reference}</div>
              <div>{t.description}</div>
              <div>{t.quantity}</div>
              <div>{t.unitPrice}</div>
              <div>{t.deposit}</div>
              <div>{t.vat}%</div>
              <div>€{calculateSubtotal(t.quantity, t.unitPrice)}</div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
