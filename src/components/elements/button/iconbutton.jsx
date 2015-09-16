import React from 'react';
import { Icon, Button } from '../../elements';

exports.IconButton = (props) => {
    let { iconColor, name, ...other } = props;
    return (
        <Button 
            {...other}    
            icon={React.Children.count(props.children) === 0 ? true : false}
        >
            <Icon 
                color={props.iconColor} 
                name={props.name}
            />
                {props.children}
        </Button>
    );
};