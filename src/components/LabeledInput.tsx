

interface LabeledInputProps {
    label: string;
    type?: 'text' | 'email' | 'password' | 'number';
    placeholder?: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
const LabeledInput = ({ label, type, placeholder, required, onChange}: LabeledInputProps) => {


  return (
    <div className="mb-2"> 
        <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
        <input onChange={onChange} type={type || "text"} id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required={required || false} />
    </div>
  )
}

export default LabeledInput
