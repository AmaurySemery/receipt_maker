import { useForm, SubmitHandler } from 'react-hook-form';
import { Estimate } from '../App';

export default function EstimateForm() {
    const { register, handleSubmit, formState: { errors }} = useForm<Estimate>();
    const onSubmit: SubmitHandler<Estimate> = data => console.log(data);
    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="estimateNumber">Estimate Number</label>
        <input type="text" placeholder='Estimate Number' id='estimateNumber' {...register('estimateNumber', {required: true})} />
        <label htmlFor="estimateDate">Estimate Date</label>
        <input type="text" placeholder='Estimate Date' id='estimateDate' {...register('estimateDate', {required: true})} />

        <input type="submit" value="create estimate" />
    </form>
}