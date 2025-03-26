import { User } from '../../../dummies/Icons';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import { Pair } from '../../../layouts/Pair/Pair';
import { TextBox } from '../../../ui/input/text/TextBox/TextBox';
import { StatusTag } from '../../../ui/labels/StatusTag/StatusTag';
import css from './styles.module.css';

export const TextBoxSample = () => {
    return (
        <VBoxPanel gap={'15px'} halign='start'>
            <Pair left={<h4>TextBox</h4>}
                  right={<StatusTag text='ENVELOPE' type='success' className='flex-0-1'/>}/>
            
            <TextBox label='Username' placeholder='Enter username' borderType='fullr' labelType='above'/>
            <TextBox label='Username' placeholder='Enter username' borderType='fullr' labelType='inline'/>
            <TextBox label='RegExp' placeholder='Enter ENVELOPE' borderType='full' labelType='inline' icon={<User/>} regex={'ENVELOPE'}/>
            <TextBox label='Username' placeholder='Enter username' borderType='underline' labelType='above' labelProps={{style: {top: '-8px'}}}/>
            <TextBox label='Password' placeholder='Enter password' borderType='fullr' labelType='inline' password/>
            <TextBox placeholder='Enter username' type='color' borderType={'fullr'} borderBehaviour={'focus'}/>
            <TextBox label='Username' placeholder='Enter username' type='color' borderType={'fullr'} borderBehaviour={'focus'}/>
            <TextBox label='Username' placeholder='Enter username' type='color' borderType={'full'} borderBehaviour={'focus'}/>
            <TextBox label='Username' placeholder='Enter username' type='color' borderType={'fullr'} borderBehaviour={'default'}/>
            <TextBox label='Details' placeholder='Enter details' borderType='fullr' labelType='inline' wrap/>
            <TextBox label='Details count' placeholder='Enter details' borderType='fullr' labelType='inline' wrap count/>
            <TextBox label='Details limit' placeholder='Enter details' borderType='fullr' labelType='inline' wrap limit={10}/>
            <TextBox label='Details limit strict' placeholder='Enter details' borderType='fullr' labelType='inline' wrap limit={10} strictLimit/>
        </VBoxPanel>
    );
};