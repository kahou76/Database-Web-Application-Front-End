import React from 'react';
import 'tachyons';

const guideline = () => {
    return (
        <div className="pa3">
          <h1>Welcome to the travel application database management page!</h1>
          <h2>Here is the user guideline for you to manage the database:</h2>
          <h3>Display:</h3>
          <p>On the left navigation menu, there are all essential tables in the travel application databases.</p>
          <p>When you click on the button on the menu, it will display the whole table with attributes and data.</p>
          <h4>Here is an example of customer table:</h4>
          {/* <img src="table.png" alt="Example customer table"  /> */}
          <p>When you insert the data successfully, an alert message will appear:</p>
          {/* <img src="insert_success_alert.png" alt="Insert success alert message" /> */}
          <p>The page will then be refreshed, and you can see the new data on the page:</p>
          {/* <img src="new_data_page_refresh.png" alt="New data displayed after page refresh" /> */}
          <p>Feel free to play around with this database demo!</p>
        </div>
    );
}

export default guideline;