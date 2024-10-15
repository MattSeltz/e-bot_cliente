import { Button } from "./Button";

export const Card = ({ item, removeEmail }) => {
  return (
    <div className="flex justify-between items-center border-b-2 py-2 rounded-sm">
      <p>{item.email}</p>
      <Button evt={removeEmail} item={item}>
        Delete
      </Button>
    </div>
  );
};
