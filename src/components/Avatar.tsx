

const Avatar = ({name, size}: {name:string, size: 'small'| 'big'}) => {
  return (
    
  <div className={`flex items-center justify-center ${size == 'small' ? 'w-6 h-6' : 'w-10 h-10'}  overflow-hidden  rounded-full bg-gray-800`}>
      <span className={`font-medium ${size == 'small' ? 'text-sm' : 'text-xl'} text-gray-200`}>{name[0].toUpperCase()}</span>
  </div>

  )
}

export default Avatar
