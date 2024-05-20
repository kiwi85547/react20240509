import React from 'react';

function App(props) {
    return (
        <div>
            {/*파일 보낼 땐 꼭 method, encType 적기*/}
            <form action="/path" method="POST" encType="multipart/form-data">
                이름 <input type="text" name="path"/>
                <br/>
                <input type="file" name="file"/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default App;