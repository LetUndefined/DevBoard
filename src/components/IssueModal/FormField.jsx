const FormField = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-1">
      <h5 className="uppercase text-[0.8rem] text-[var(--color-grey)] font-bold">
        {label}
      </h5>
      {children}
    </div>
  );
};

export default FormField;
