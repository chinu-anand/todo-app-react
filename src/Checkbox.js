import {FaCheckSquare, FaSquare} from "react-icons/fa";
import {useState} from "react";

export default function Checkbox({defaultChecked=false}) {
    const [checked, setChecked] = useState(defaultChecked);
    return(
        <div>
            {!checked && (
                <FaSquare className="checkbox unchecked"/>
            )}
            {checked && (
                <FaCheckSquare className="checkbox checked"/>
            )}
        </div>
    );
}