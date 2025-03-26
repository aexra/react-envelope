import { useState } from 'react';
import { Pizza, User } from '../../../dummies/Icons';
import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import { Pair } from '../../../layouts/Pair/Pair';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import ExTextBox from '../../../ui/input/text/ExTextBox/ExTextBox';
import { StatusTag } from '../../../ui/labels/StatusTag/StatusTag';
import { CodeBlock } from '../../../widgets/Markdown';
import css from './styles.module.css';

export const ExTextBoxSample = () => {
    const [state1, setState1] = useState('');
    const [state2, setState2] = useState('');
    const [state3, setState3] = useState('');
    const [state4, setState4] = useState('');
    const [state5, setState5] = useState('');
    const [state6, setState6] = useState('');
    const [state7, setState7] = useState('');
    const [state8, setState8] = useState('');
    
    return (
        <>
            <Pair left={<h4>ExTextBox</h4>}
                      right={<StatusTag text='ЭНВЕЛОУП' type='success' className='flex-0-1'/>}/>

                <input type='text'/>
                <input type='password'/>

                <HBoxPanel gap={'20px'} valign='center'>

                    <ExTextBox className={css.inputSample} text={state1} textChanged={setState1}/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}/>`}</CodeBlock>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               placeholder='Плейсхолдер'
                               icon={<Pizza/>}
                               text={state2} textChanged={setState2}/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}
           placeholder='Плейсхолдер'
           icon={<Pizza/>}/>`}</CodeBlock>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               hint='Дио'
                               placeholder='А вот и нет, это я - Дио!'
                               icon={<User/>}
                               text={state3}
                               textChanged={setState3}/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}
           hint='Дио'
           placeholder='А вот и нет, это я - Дио!'
           icon={<User/>}/>`}</CodeBlock>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               hint={'Знаешь regex("ENVELOPE")?'}
                               placeholder='Не ENVELOPE'
                               regex='ENVELOPE'
                               text={state4}
                               textChanged={setState4}/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}
           hint={'Знаешь regex("ENVELOPE")?'}
           placeholder='Не ENVELOPE'
           inputRef={sampleRef1}
           regex='ENVELOPE'/>`}</CodeBlock>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               readonly
                               borderless
                               text='Я только для чтения еще и без рамок'
                               hint='Теперь это просто текст с подсказкой'/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}
           readonly
           borderless
           text='Я только для чтения еще и без рамок'
           hint='Теперь это просто текст с подсказкой'/>`}</CodeBlock>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               password
                               hint='Пароль'
                               placeholder='Введите пароль'
                               text={state5}
                               textChanged={setState5}/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}
           password
           hint='Пароль'
           placeholder='Введите пароль'/>`}</CodeBlock>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                <ExTextBox className={css.inputSample}
                               hint='TextArea с лимитом'
                               placeholder='Введите длинный текст'
                               text={state6}
                               textChanged={setState6}
                               wrap
                               limit={30}/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}
           hint='TextArea с лимитом'
           placeholder='Введите длинный текст'
           text={sampleState5}
           textChanged={setSampleState5}
           wrap
           limit={30}/>`}</CodeBlock>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                <ExTextBox className={css.inputSample}
                               hint='TextArea со строгим лимитом'
                               placeholder='Введите длинный текст'
                               text={state7}
                               textChanged={setState7}
                               wrap
                               limit={10}
                               strictLimit/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}
           hint='TextArea со строгим лимитом'
           placeholder='Введите длинный текст'
           text={sampleState7}
           textChanged={setSampleState7}
           wrap
           limit={10}
           strictLimit/>`}</CodeBlock>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                <ExTextBox className={css.inputSample}
                               hint='TextArea с простым счетчиком'
                               placeholder='Введите длинный текст'
                               text={state8}
                               textChanged={setState8}
                               wrap
                               count/>
                    <CodeBlock lang={'jsx'} className={'flex-1'}>{`<ExTextBox className={css.inputSample}
           hint='TextArea с простым счетчиком'
           placeholder='Введите длинный текст'
           text={sampleState8}
           textChanged={setSampleState8}
           wrap
           count/>`}</CodeBlock>
                </HBoxPanel>
        </>
    );
};