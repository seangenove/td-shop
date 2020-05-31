import React from 'react';
import ReactLoading from 'react-loading';

const Example = ({ type = 'spokes', color = 'grey' }) => (
    <div className="container bg-light">
        <div className="row py-10">
            <div className="col text-center d-flex justify-content-center">
                <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
            </div>
        </div>
    </div>
);

export default Example;