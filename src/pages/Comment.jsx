import { useEffect } from "react";
import { useUser } from "../components/Authentication/useUser";
import { Link } from "react-router-dom";
import StarRating from "../components/main/StarRating";
import Modal from "../components/main/Modal";
import ModalQuestion from "../components/main/ModalQuestion";
import NoProduct from "../components/main/NoProduct";
import Button from "../components/main/Button";
import { useComments } from "../components/Profile/Comments/useComments";
import { useDeleteComment } from "../components/Profile/Comments/useDeleteComment";
import UserComment from "../components/Details/UserComment";
import CommentSkeleton from "../components/Loading/CommentSkeleton";

function Comment() {
  const { user } = useUser();
  const { comments, isLoading } = useComments(user?.id);
  const { mutate, isDeleting } = useDeleteComment();

  useEffect(function () {
    document.title = " نظرات کاربر";

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  if (isLoading) return <CommentSkeleton />;

  return (
    <div className="rounded-2xl">
      <div>
        <div className="block rounded-t-2xl py-4  mb-4">
          {comments?.length ? (
            comments.map((comment) => (
              <div key={comment.id} className="mb-4">
                <div className="border-x border-t border-(--border-color) rounded-t-2xl">
                  <div className="mx-5 py-3 flex justify-between">
                    <div className="flex items-start gap-4">
                      <Link to={`/products/details/${comment.product_id}`}>
                        <p className="text-(--back-color)">{comment.title}</p>
                      </Link>
                      <StarRating
                        size={20}
                        readOnly="true"
                        defaultRating={comment.userRating}
                      />
                    </div>
                    <div className="flex gap-6 text-sm">
                      <Modal>
                        <Modal.Open opens="edit">
                          <Button> ویرایش</Button>
                        </Modal.Open>
                        <Modal.Window name="edit">
                          <UserComment editingComment={comment} />
                        </Modal.Window>
                        <Modal.Open>
                          <Button disabled={isDeleting}>حذف</Button>
                        </Modal.Open>
                        <Modal.Window>
                          <ModalQuestion
                            name=" حذف نظر انتخابی "
                            disabled={isDeleting}
                            button="حذف"
                            onConfirm={() => mutate(comment.id)}
                          />
                        </Modal.Window>
                      </Modal>
                    </div>
                  </div>
                </div>

                <div className="min-h-10 flex py-2 px-2 border border-(--border-color)">
                  <p className="text-sm">{comment.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <NoProduct>هیچ نظری ثبت نشده است</NoProduct>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
