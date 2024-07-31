import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_green' | 'btn_green' | 'btn_white_text' | 'btn_white' | 'btn_dark_green_outline';
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
}

export default Button;