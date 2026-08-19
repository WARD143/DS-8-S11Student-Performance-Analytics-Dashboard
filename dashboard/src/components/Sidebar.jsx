import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, AlertCircle, Settings } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon"><LayoutDashboard size={24} /></div>
        <h2>EduAnalytics</h2>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <LayoutDashboard size={20} />
          <span>Overview</span>
        </NavLink>
        <NavLink to="/students" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <Users size={20} />
          <span>Students</span>
        </NavLink>
        <NavLink to="/academics" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <BookOpen size={20} />
          <span>Academics</span>
        </NavLink>
        <NavLink to="/alerts" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <AlertCircle size={20} />
          <span>Risk Alerts</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
