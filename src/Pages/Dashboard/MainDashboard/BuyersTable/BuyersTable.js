import React from 'react';
import BuyersData from './BuyersData';

const BuyersTable = () => {
    return (
        <div className=' duration-1000'>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">

          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Orders</th>
              
              <th>Verification</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              [1,1,1,1,1].map(product => {
                return <BuyersData key={product.id} product={product}></BuyersData>
              })
            }

          </tbody>



        </table>
      </div>

    </div>
    );
};

export default BuyersTable;