import React, {useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function ConfirmInfo() {
    let location = useLocation();
    useEffect(() => {
        console.log(location.state)
    })
    return (
        <div>
            confirm info
        </div>
    )
}

export default ConfirmInfo;