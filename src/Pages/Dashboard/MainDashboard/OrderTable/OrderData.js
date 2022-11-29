import React from 'react';

const OrderData = ({order}) => {
    return (
        <tr className='duration-1000'>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={order.productImg} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{order._id.slice(16,order._id.length)}</div>
                            <div className="text-sm opacity-50">{order.productLocation.split('-')[1]}</div>
                        </div>
                    </div>
                </td>
                <td>
                {order.seller}
                    <br />
                    <span className="badge badge-ghost badge-sm">{order.sellerVerified}</span>
                </td>
                <td></td>
                <th>
                    <button className="btn btn-secondary btn-xs  text-white">Price: {order.productPrice} <br /> </button>
                </th>
            </tr>
    );
};

export default OrderData;