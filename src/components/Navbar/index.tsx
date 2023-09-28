import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const handleLogOut = () => {
    localStorage.removeItem('authToken')
    window.location.replace('/');
  } 

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: '/home'
    },
    {
        label: 'Category',
        key: '/category'
    },
    {
        label: 'Profile',
        key: '/profile'
    },
    {
        label: 'Logout',
        key: '/',
        onClick: handleLogOut
    },
]

const Navbar = () => {

    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key)
    };

    return (
        <Menu onClick={onClick} items={items} mode={'horizontal'}/>
    )
}

export default Navbar