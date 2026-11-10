import { faDigitsNum } from "../../utils/helpers";
import { useUser } from "../Authentication/useUser";
import { useComment } from "./useComment";
import { useProduct } from "./useProduct";
import Modal from "../main/Modal";
import Button from "../main/Button";
import StarRating from "../main/StarRating";
import Comment from "./UserComment";

const average = (arr = []) =>
  arr.length ? arr.reduce((acc, cur) => acc + cur, 0) / arr.length : 0;

function DetailComments() {
  const { product } = useProduct();
  const { comments } = useComment(product?.id);
  const { user } = useUser();
  const avgUserRating = average(
    comments?.map((comment) => comment?.userRating),
  );
  const editingComment = comments?.find(
    (comment) => comment?.user_id === user?.id,
  );
  return (
    <section className="container my-12 px-4">
      <div className="grid  md:grid-cols-[3fr_5fr] lg:grid-cols-[1.5fr_4fr]">
        <aside className="mb-12 md:mb-20 md:ml-4">
          <p className="mb-4">
            {avgUserRating > 0 && (
              <>
                <span className="text-base pl-1.5">
                  {faDigitsNum(avgUserRating)}
                </span>{" "}
                از {faDigitsNum(5)}
              </>
            )}
          </p>

          <div className="flex items-start gap-4">
            <StarRating
              key={avgUserRating}
              size={22}
              defaultRating={avgUserRating}
              readOnly={true}
            />
            <p className="leading-2 text-xs pt-2">از مجموع 5 امتیاز</p>
          </div>

          <div className="mt-8">
            <Modal>
              <Modal.Open opens="comment">
                <Button>ثبت دیدگاه</Button>
              </Modal.Open>
              <Modal.Window name="comment">
                <Comment
                  editingComment={editingComment}
                  productId={product?.id}
                  title={product?.title}
                />
              </Modal.Window>
            </Modal>
          </div>
        </aside>
        <div className="flex flex-col">
          {!comments?.length && <h3>هیچ نظری برای این محصول ثبت نشده است </h3>}
          {comments &&
            comments.map((comment) => (
              <Comments key={comment.id} comment={comment} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default DetailComments;

export function Comments({ comment }) {
  return (
    <div className="px-4 border-b border-b-(--border-color-alt) pt-4 pb-2">
      <p className="first:text-(--text-color) first:pb-4">
        {comment.userName}{" "}
      </p>
      <div className="comment-star user-star">
        {comment.userRating < 5 ? (
          <p className="pb-4">{comment.userRating} از 5</p>
        ) : (
          <p>{comment.userRating}</p>
        )}
        <StarRating
          key={comment.userRating}
          size={20}
          defaultRating={comment.userRating}
          readOnly={true}
        />
      </div>
      <p className="pt-3 text-sm">{comment.comment}</p>
    </div>
  );
}
