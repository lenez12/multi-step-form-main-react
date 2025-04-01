interface SummaryRowProps {
  label: string;
  price: string;
  bold?: boolean;
  muted?: boolean;
}

const SummaryRow: React.FC<SummaryRowProps> = ({
  label,
  price,
  bold,
  muted,
}) => {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`text-lg ${muted ? "text-cool-gray" : "text-marine-blue"} ${
          bold && "font-bold"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-lg ${muted ? "text-cool-gray" : "text-marine-blue"} ${
          bold && "font-bold"
        }`}
      >
        {price}
      </span>
    </div>
  );
};

export default SummaryRow;
