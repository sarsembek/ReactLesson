import { FC } from 'react';
import { Flex, Input, Button } from 'antd';
import './Content.css';
import { VideoCameraTwoTone } from '@ant-design/icons';

const Content: FC = () => {
    return (
        <>
        <Flex
        align='center'
        style={{
            fontSize : '1.5rem',
            margin: '7rem'
    }}
        >
            <div id='container'>
                <p>Education</p>
                <h1>Cloud-based LMS<br/>Trusted by 1000+</h1>
                <p>Lorem ipsum is simply dummy text to of the 
                   printing <br/>typesetting industry. Lorem ipsum has been
                </p>
                <div className='wrapper'>
                    <Input size='large' placeholder='Your email address' id='input'/>
                    <Button size='large' type='primary'>Sign Up</Button>
                </div>
            </div>
        </Flex>
        <Flex
        id='wrapper'
        justify='center'
        >
            <div className='flex'>
            <div className='flex-1'>
                <VideoCameraTwoTone className='icon'/>
                <div>
                    <h3>Video Training</h3>
                    <p>With unlimited courses</p>
                </div>
            </div>
            <div className='flex-1'>
                <VideoCameraTwoTone className='icon'/>
                <div>
                    <h3>Video Training</h3>
                    <p>With unlimited courses</p>
                </div>
            </div>
            <div className='flex-1'>
                <VideoCameraTwoTone className='icon'/>
                <div>
                    <h3>Video Training</h3>
                    <p>With unlimited courses</p>
                </div>
            </div>
            </div>
        </Flex>
        </>
    )
}

export default Content;