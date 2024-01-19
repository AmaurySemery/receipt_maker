import { useForm, SubmitHandler } from 'react-hook-form';
import { Estimate } from '../App';

export default function EstimateForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Estimate>();
    const onSubmit: SubmitHandler<Estimate> = (data) => console.log(data);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="estimateNumber">Estimate Number</label>
        <input
          type="text"
          placeholder="Estimate Number"
          id="estimateNumber"
          {...register("estimateNumber", { required: true })}
        />
        <span>
          {errors.estimateNumber && "Please, enter an estimate number"}
        </span>

        <label htmlFor="estimateDate">Estimate Date</label>
        <input
          type="text"
          placeholder="Estimate Date"
          id="estimateDate"
          {...register("estimateDate", { required: true })}
        />
        <span>{errors.estimateDate && "Please, enter an estimate date"}</span>

        <label htmlFor="paymentDate">Payment Date</label>
        <input
          type="text"
          placeholder="Payment Date"
          id="paymentDate"
          {...register("paymentDate", { required: true })}
        />
        <span>{errors.estimateDate && "Please, enter an payment date"}</span>

        <input type="submit" value="create estimate" />
      </form>
    );
}