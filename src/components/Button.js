const Button = (props) => {
    return (
        <button onClick={props.func}
                className={props.className}
                >{props.text}</button>
    )
}


/*
MAP FUNCTION
==================
JavaScript:
    const Array =[...]
    {Array.map((v) => (<h3>v.text</h3>))}

Roblox-Lua equivalent:
    for i,v in pairs(Array:GetChildren) do
        print(v.Name)
    end
*/


export default Button
