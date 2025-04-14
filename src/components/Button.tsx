import Spinner from "./Spinner";

interface ButtonProps {
  title: string;
  loading?: boolean;
  loadingText: string;
  onClick?: () => void;
}

const Button = ({ title, loading, loadingText, onClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`text-white cursor-pointer transition-colors ${loading ? 'bg-gray-100 outline-2 outline-gray-800':'bg-gray-800' } w-full mt-6 ${!loading && 'hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300'} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 `}
    >
      {loading ? <Spinner loadingText= {loadingText} /> : title}
    </button>
  );
};

export default Button;
