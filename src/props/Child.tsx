interface ChildProps {
    color: string
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
    </div>;
};

// 'Child' is a React function component
// 'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'
// 'Child' will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
    </div>
};

ChildAsFC.displayName