import React, {Component} from 'react';

interface ContractItemType {
    des: string,
    name: string,
    icon: Component
}
function ContractItem(props: ContractItemType){
    const {des, name, icon} = props;

    return (
        <div className={''}>
            </div>
    );
}
