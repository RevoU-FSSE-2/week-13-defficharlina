import { Outlet } from "react-router-dom"
import { Navbar } from '../../components';

const AnotherLayout = () => {

    return (
        <div>
            {/*<div>Another Layout</div>*/}
            <Navbar />
            <Outlet/>
            <div>Footer</div>
        </div>
    )
}

export default AnotherLayout