import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Users, GraduationCap, Clock, Award } from 'lucide-react';
import { Card, StatBox } from '../components/Card';
import { SUBJECT_PERFORMANCE, ATTENDANCE_TRENDS, MOCK_STUDENTS } from '../data';

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1>Dashboard Overview</h1>
          <p className="text-secondary">Welcome back! Here's what's happening academically today.</p>
        </div>
        <div className="flex gap-4">
          <div className="glass-panel px-4 py-2 text-sm">Fall Semester 2026</div>
        </div>
      </header>

      {/* KPI Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        <StatBox title="Total Students" value="1,240" icon={<Users size={20} />} trend="12%" trendUp={true} />
        <StatBox title="Average GPA" value="3.42" icon={<GraduationCap size={20} />} trend="0.1" trendUp={true} />
        <StatBox title="Avg. Attendance" value="88%" icon={<Clock size={20} />} trend="2%" trendUp={false} />
        <StatBox title="Top Performers" value="156" icon={<Award size={20} />} trend="5%" trendUp={true} />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-3 gap-6 mb-6" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <Card title="Subject-wise Performance (Average Score)">
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SUBJECT_PERFORMANCE} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="subject" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Bar dataKey="average" fill="url(#colorUv)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Risk Distribution">
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Low Risk', value: 75 },
                    { name: 'Medium Risk', value: 15 },
                    { name: 'High Risk', value: 10 }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  <Cell fill="#10b981" />
                  <Cell fill="#f59e0b" />
                  <Cell fill="#ef4444" />
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Attendance & Table */}
      <div className="grid grid-cols-2 gap-6" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <Card title="Attendance Trends (8 Weeks)">
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ATTENDANCE_TRENDS} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="week" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[0, 100]} />
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Area type="monotone" dataKey="attendance" stroke="#10b981" fillOpacity={1} fill="url(#colorAttendance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="At-Risk Students (Action Required)">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '12px 8px', color: '#94a3b8' }}>ID</th>
                  <th style={{ padding: '12px 8px', color: '#94a3b8' }}>Name</th>
                  <th style={{ padding: '12px 8px', color: '#94a3b8' }}>Attendance</th>
                  <th style={{ padding: '12px 8px', color: '#94a3b8' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_STUDENTS.filter(s => s.riskLevel !== 'Low').map((student, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '12px 8px' }}>{student.id}</td>
                    <td style={{ padding: '12px 8px' }}>{student.name}</td>
                    <td style={{ padding: '12px 8px' }}>{student.attendance}%</td>
                    <td style={{ padding: '12px 8px' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '12px',
                        backgroundColor: student.riskLevel === 'High' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        color: student.riskLevel === 'High' ? '#ef4444' : '#f59e0b'
                      }}>
                        {student.riskLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

    </div>
  );
};

export default Dashboard;
