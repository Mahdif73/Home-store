import { useForm } from "react-hook-form";
import { useUser } from "../../Authentication/useUser";
import StarRating from "../../main/StarRating";
import Button from "../../main/Button";

function UserComment({ onClose, editingComment = {}, productId, title }) {
  // const { product } = useProduct();
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
    <form onSubmit={handleSubmit(onSubmit)} className="comment-modal">
      <h3>ثبت امتیاز و دیدگاه</h3>
      <div>
        <div className="comment-score">
          <p>امتیاز کاربر :</p>
          <StarRating
            maxRating={5}
            size={25}
            defaultRating={editingComment?.userRating || 0}
            onSetRating={(rating) => setValue("userRating", rating)}
          />
        </div>
        <div className="comment-review">
          <p>متن دیدگاه : </p>
          <div className="comment-sort">
            <textarea className="comment-text" {...register("comment")} />{" "}
            <select {...register("userName")} className="comment-user">
              <option className="comment-option" value="کاربر هوم استور">
                کاربر هوم استور
              </option>
              <option className="comment-option" value={name}>
                {name}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="comment-btn">
        <Button type="review">ثبت امتیاز و دیدگاه</Button>
      </div>
    </form>
  );
}
export default UserComment;
