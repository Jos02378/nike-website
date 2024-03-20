const Button: React.FC<{
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
}> = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => (
  <button
    className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full ${
      fullWidth && 'w-full'
    } ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : 'bg-coral-red text-white border border-coral-red'
    } `}
  >
    {label}
    {iconUrl && (
      <img
        src={iconUrl}
        alt='arrow right icon'
        className='ml-2 rounded-full w-5 h-5'
      />
    )}
  </button>
);

export default Button;
