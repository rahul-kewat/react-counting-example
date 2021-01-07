import React from 'react';
import {useState, useEffect} from 'react';
function Counting(){
    let [ counting  , setCounting] = useState(0);
    function increaseCounting(){
        setCounting(counting+1);
    }
    return (
    <>
        <p>{counting}</p>
        <button onClick={increaseCounting}> Increase Counting</button>
    </>
    );
}
export default Counting