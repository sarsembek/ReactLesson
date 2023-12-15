import { FC } from 'react';
import { Flex, Input, Button, Tag } from 'antd';
import './Content.css';
import { VideoCameraTwoTone } from '@ant-design/icons';
import image from '../../assets/education.svg'


const Content: FC = () => {
    return (
        <>
        <Flex
        align='center'
        justify='center'
        style={{
            fontSize : '1.5rem',
            margin : '5rem'
    }}
        >
            <div id='container'>
                <Tag color='#000'>Education</Tag>
                <h1>Cloud-based LMS<br/>Trusted by 1000+</h1>
                <p>Lorem ipsum is simply dummy text to of the 
                   printing <br/>typesetting industry. Lorem ipsum has been
                </p>
                <div className='wrapper'>
                    <Input size='large' placeholder='Your email address' id='input'/>
                    <Button size='large' type='primary'>Sign Up</Button>
                </div>
            </div>
            <div className='wrapper'>
                <img className='img' src={image}/>
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