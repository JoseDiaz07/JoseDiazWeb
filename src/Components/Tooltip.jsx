const Tooltip = ({icon, text}) => {
    return (
        <div className="group flex relative">
            {icon}
            <span class="group-hover:opacity-100 transition-opacity bg-gray-900 px-2 text-xs text-gray-100 rounded-md absolute left-1/2 top-2 
-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{text}</span>
        </div>
    )
}

export default Tooltip