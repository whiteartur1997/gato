import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState } from "react";
import InputText from "../InputText/InputText";
import pencil from './../../assets/pencil.svg';
import s from './EditableSpan.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type EditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
};

const EditableSpan: React.FC<EditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,
        value,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [innerValue, setInnerValue] = useState(value);
    const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {};

    const onEnterCallback = () => {
        setEditMode(false); // выключить editMode при нажатии Enter
        onEnter && onEnter();
    };
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false); // выключить editMode при нажатии за пределами инпута
        onBlur && onBlur(e);
    };
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true); // включить editMode при двойном клике

        onDoubleClick && onDoubleClick(e);
    };
    const onChangeValueCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.currentTarget.value);
    }

    const spanClassName = `${s.superEditableSpan} ${className || ""}`;

    return (
        <>
            {editMode
                ? (
                    <InputText
                        value={innerValue}
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        onChange={onChangeValueCallback}
                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}

                        {...restSpanProps}
                    >
                        <img alt="span" className={s.editableSpanPencil} src={pencil} />
                        {children || innerValue}
                    </span>
                )
            }
        </>
    );
}

export default EditableSpan;
