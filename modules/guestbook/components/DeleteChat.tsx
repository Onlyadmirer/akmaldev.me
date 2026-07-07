import { toast } from "sonner";

function DeleteChat() {
  const onDelete = async (id: string) => {
    try {
      await fetch(`/api/guestbook?id=${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      });

      toast.success("Deleted");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return <div></div>;
}

export default DeleteChat;
