import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { Estimate } from '../App';
import styles from './EstimateForm.module.css';

export default function EstimateForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      control
    } = useForm<Estimate>();
    
    // Permet de récupérer chaque ligne générée automatiquement pas l'utilisateur
    const { fields, append, remove } = useFieldArray({
      name: 'tasks',
      control
    });
    const onSubmit: SubmitHandler<Estimate> = (data) => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="estimateNumber" className={styles.formlabel}>
          Estimate Number
        </label>
        <input
          className={styles.forminput}
          type="text"
          placeholder="Estimate Number"
          id="estimateNumber"
          {...register("estimateNumber", { required: true })}
        />
        <span className={styles.formerror}>
          {errors.estimateNumber && "Please, enter an estimate number"}
        </span>

        <label htmlFor="estimateDate" className={styles.formlabel}>
          Estimate Date
        </label>
        <input
          className={styles.forminput}
          type="date"
          id="estimateDate"
          {...register("estimateDate", { required: true })}
        />
        <span className={styles.formerror}>
          {errors.estimateDate && "Please, enter an estimate date"}
        </span>

        <label htmlFor="paymentDate" className={styles.formlabel}>
          Payment Date
        </label>
        <input
          className={styles.forminput}
          type="date"
          id="paymentDate"
          {...register("paymentDate", { required: true })}
        />
        <span className={styles.formerror}>
          {errors.estimateDate && "Please, enter a payment date"}
        </span>

        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section className={styles.task}>
                <div>
                  <label htmlFor="taskReference" className={styles.formlabel}>
                    Item Reference
                  </label>
                  <input
                    type="text"
                    id="taskReference"
                    {...register(`tasks.${index}.reference` as const, {
                      required: true,
                    })}
                    className={styles.forminput}
                  />
                  <div className={styles.formerror}>
                    {errors?.tasks?.[index]?.reference &&
                      "Please, enter a reference"}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => {
            append({
              reference: "12345",
              description: "describe the item",
              quantity: 1,
              unitPrice: 100,
              vat: 20,
              deposit: 0,
            });
          }}
          className={styles.formbutton}
        >
          add item
        </button>

        <input type="submit" value="create estimate" />
      </form>
    );
}