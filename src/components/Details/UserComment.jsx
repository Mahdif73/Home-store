import { useForm } from "react-hook-form";
import { useUser } from "../Authentication/useUser";
import StarRating from "../main/StarRating";
import Button from "../main/Button";
import { useAddComment } from "./useAddComment";
import { useEditComment } from "./useEditComment";

function UserComment({ onClose, editingComment = {}, productId, title }) {
  const { user } = useUser();

  const name = user?.user_metadata?.fullName;

  const { mutate } = useAddComment();
  const { editComment } = useEditComment();

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: editingComment
      ? {
          userRating: editingComment.userRating,
          userName: editingComment.userName,
          comment: editingComment.comment,
        }
      : {
          userRating: 0,
          userName: name,
          comment: "",
        },
  });

  function onSubmit(data) {
    const newComment = {
      ...data,
      product_id: editingComment?.product_id ?? productId,
      user_id: user?.id,
      title,
    };

    if (editingComment) {
      editComment({ newEditComment: newComment, id: editingComment.id });
    } else {
      mutate(newComment);
    }
    reset({
      userRating: 0,
      userName: name,
      comment: "",
    });
    onClose();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-2 pb-4 px-8 flex flex-col items-start h-125 w-112.5 bg-(--border-color-alt)"
    >
      <h3 className="text-base mb-8 pt-2">ثبت امتیاز و دیدگاه</h3>
      <div>
        <div className="flex justify-between ml-8 mb-8">
          <p className="font-medium">امتیاز کاربر :</p>
          <StarRating
            maxRating={5}
            size={25}
            defaultRating={editingComment?.userRating || 0}
            onSetRating={(rating) => setValue("userRating", rating)}
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="font-medium">متن دیدگاه : </p>
          <div className="flex flex-col justify-center items-end">
            <textarea
              className="text-sm my-4 py-4 px-4 resize-none h-50 w-95 bg-(--body-color) outline-0 border-0 rounded-2xl font-[Vazirmatn]"
              {...register("comment")}
            />
            <select
              {...register("userName")}
              className="text-sm w-30 rounded-2xl font-[Vazirmatn] outline-0 cursor-pointer border border-(--border-color) p-1.25"
            >
              <option
                className="text-sm outline-0 border border-(--border-color)"
                value="کاربر هوم استور"
              >
                کاربر هوم استور
              </option>
              <option
                className="text-sm outline-0 border border-(--border-color)"
                value={name}
              >
                {name}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="pt-4 mx-auto">
        <Button type="submit" htmlType="review">
          ثبت امتیاز و دیدگاه
        </Button>
      </div>
    </form>
  );
}
export default UserComment;
