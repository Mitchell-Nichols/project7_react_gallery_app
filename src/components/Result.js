import React from 'react';
import Notfound from './Notfound'

const Result = props => {

    const results = props.data;
    let list;
    if(results.length >0){
        list = results.map( pic =>
        // <img src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} alt="" />
        <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} alt={pic.title} />
        )
    } else {
        list = <Notfound />
    }

    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            <li>
                { list }
            </li>

        </ul>
      </div>
    );
}

export default Result;