export const Button = ({ children, evt, item }) => {
  return (
    <button
      className={` p-1 rounded-md cursor-pointer transition-colors  ${
        children === "Delete"
          ? "bg-red-600 hover:bg-red-700"
          : "bg-slate-800 hover:bg-slate-700"
      }`}
      onClick={() => evt(item)}
      type="button"
    >
      {children}
    </button>
  );
};
