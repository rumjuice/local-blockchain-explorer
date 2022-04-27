import {useFormik} from 'formik';
import {FC} from 'react';
import {TransferParam} from '../Types';

interface Props {
  from: string;
  to: string;
  onSubmit(formData: TransferParam): void;
}

const TransferForm: FC<Props> = ({from, to, onSubmit}) => {
  const formik = useFormik({
    initialValues: {
      to: to,
      value: '',
    },
    onSubmit,
    validateOnChange: true,
    enableReinitialize: true,
  });

  return (
    <div className="w-4/5 gap-3 my-2 flex flex-col items-center">
      <div>From: {from}</div>
      <div>To: {to}</div>
      <div>
        <span>Amount:</span>
        <input
          name="value"
          className="ml-2 rounded-md p-2 flex-row justify-start items-center inline-flex border border-sky-200 text-sm focus:bg-slate-50 focus:border-sky-500 outline-none"
          placeholder="Input amount in ETH"
          value={formik.values.value}
          onChange={formik.handleChange}
        />
      </div>
      <button
        type="submit"
        onClick={() => formik.handleSubmit()}
        className="max-w-fit inline-flex justify-center px-4 py-1 text-sm font-medium text-sky-900 bg-sky-100 border border-transparent rounded-md hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500">
        Send
      </button>
    </div>
  );
};

export default TransferForm;
