export default function CommentItem({
    author,
    text
}) {
   return(
          <li className="comment">
             <p>{author}: {text}</p>
          </li>
   );
}