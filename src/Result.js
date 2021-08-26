import React from 'react';

const Result = props => {

    const results = props.data;
    let list = results.map( pic =>
        // <img src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} alt="" />
        <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} alt="" />
    )

    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            <li>
                { list }
            </li>
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>
    );
}

export default Result;