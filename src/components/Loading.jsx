import { createPortal } from "react-dom";
const Loading = () => {
    const FIX = 15;
  return createPortal(
    <div className="loading">
      <p className="cnt">Loading ...</p>
      <div className="load">
        {Array.from({length:FIX},(_,i) =>(
            <span key={i} style={{"--i":i}}></span>
        ))}
        </div>
    </div>,document.body
  )
}

export default Loading