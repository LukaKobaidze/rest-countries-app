type Props = {
  className?: string;
};

const KeyboardArrowRight = ({ className }: Props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <title>keyboard_arrow_right</title>
      <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
    </svg>
  );
};

export default KeyboardArrowRight;