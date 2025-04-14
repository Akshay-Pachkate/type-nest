import { Link } from 'react-router-dom'

interface FormHeaderProps {
    header: string;
    subHeader: string;
    link: string;
}

const FormHeader = ({header, subHeader, link}: FormHeaderProps) => {
  return (
    <div className='flex flex-col items-center mb-4' >
      <div>
        <h1 className='text-3xl font-bold' >{header}</h1>
      </div>
      <h4 className='text-sm text-gray-500' >{subHeader} <Link className='underline' to={link} >{link.slice(1)}</Link></h4>
    </div>
  )
}

export default FormHeader
