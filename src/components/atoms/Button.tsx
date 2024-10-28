import React from "react"
import { ButtonStyled } from "../../assets/style/global"

interface ButtonStyledProps {
    w?: string, //width
    h?: string, //height
    b?: string, //border
    br?: string, //border-radius
    bg?: string, //background-color
    fw?: string, //fontW
    color?: string
    text: string
}
const Button: React.FC<ButtonStyledProps> = (props) => {
    const styledButton = {
        backgroundColor: props.bg,
        width: props.w,
        height: props.h,
        border: props.b,
        borderRadius: props.br,
        color: props.color,
        fontWeight: props.fw,
    }
    return(
        <ButtonStyled style={styledButton}>
            {props.text}
        </ButtonStyled> 
    )
}

export default Button