import React, {Component} from 'react';
import ProtoTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps={
        name: '기본 이름'
    }
    
    static propTypes = {
        name: ProtoTypes.string,
        favoriteNumber: ProtoTypes.number.isRequired
    }

    render(){
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                {name} 나의 첫 컴포넌트 <br/>
                children 값은 {children} <br/>
                {/*  */}
                내가 좋아하는 수자는 {favoriteNumber} 입니다. 

            </div>
            
        );
    }
}

export default MyComponent;