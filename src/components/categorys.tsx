{/* Props Info */}
type CategorysProps = {
  name: string;
  title: string;
  span?: string;
};

const Categorys = ({ name, title, span }: CategorysProps) => {
  return (
    <div className="text-4xl space-y-2">
      <span className="flex gap-1 items-center text-sm text-[--color-theme]">
        . . /{name}
      </span>
      <h1 className="text-[--color-white] font-light">{title} <span className="text-[--color-theme] font-semibold">{span}</span></h1>
    </div>
  );
};

export default Categorys;
