export default function Button({children, textOnly, className, ...props}){
    let cssStyle =textOnly? "text-button" : "button"
    cssStyle += ' ' + className
    
    return <button className={cssStyle} {...props}>{children}</button>
}


