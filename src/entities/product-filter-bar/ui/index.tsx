type Props = {
  filterProducts: React.ReactNode;
};

export const ProductFilterBar = ({ filterProducts }: Props) => {
  return (
    <>
      <div className="w-full bg-slate-500 h-8">{filterProducts}</div>
    </>
  );
};
