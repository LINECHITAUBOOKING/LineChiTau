import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TestUpload() {
  const [uploadedPicArr, setUploadedPicArr] = useState();

  return (
    <>
      <form
        action="http://localhost:3000/testUpload/test"
        method="post"
        encType="multipart/form-data"
      >
        <lebel>
          上傳複數圖片
          <input type="file" name="intro-pic"></input>
        </lebel>
        <button>Submit</button>
      </form>
    </>
  );
}
