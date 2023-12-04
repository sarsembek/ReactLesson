import { Flex, Button } from 'antd';
import { FC } from 'react';
import './Header.css';

const Header: FC = () => {
    return (
        <Flex
        className='container'
        justify='space-around'
        align='center'
        >
            <h2>LOGO</h2>
            <ul className='header-list'>
                <li className="item">Home</li>
                <li className="item">About</li>
                <li className="item">Course</li>
                <li className="item">Pages</li>
                <li className="item">Blog</li>
                <li className="item">Contact</li>
            </ul>
            <div className='btn-wrapper'>
                <Button>Login</Button>
                <Button type='primary'>Register</Button>
            </div>
        </Flex>
    )
}

export default Header;