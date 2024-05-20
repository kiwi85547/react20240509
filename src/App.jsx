import React, {useState} from 'react';
import axios from "axios";

function App(props) {
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);

    // form 요청을 막음
    function handleSubmit(e) {
        e.preventDefault();
        console.log("axios로 파일 전송")

        // multipart/form-data
        // 영어판 api에만 있음
        axios.postForm("/api/main45/sub1", {name: "son", file: "file"});
    }

    return (
        <div>
            {/*파일 보낼 땐 꼭 method, encType 적기*/}
            <form onSubmit={handleSubmit}
                // preventDefault로 막음
                // action="/path" method="POST" encType="multipart/form-data"
            >
                이름 <input type="text" name="path" onChange={e => setName(e.target.value)}/>
                <br/>
                <input type="file" name="file" onChange={e => setFile(e.target.files[0])}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default App;