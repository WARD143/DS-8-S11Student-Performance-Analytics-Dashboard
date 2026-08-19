export const Card = ({ children, className = '', title }) => {
  return (
    <div className={`glass-card ${className}`}>
      {title && <h3 className="mb-6">{title}</h3>}
      {children}
    </div>
  );
};

export const StatBox = ({ title, value, icon, trend, trendUp }) => {
  return (
    <div className="glass-card animate-fade-in flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm">{title}</h3>
        <div className="text-secondary">{icon}</div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h2>{value}</h2>
        {trend && (
          <span className={`text-xs ${trendUp ? 'text-success' : 'text-danger'}`} style={{ color: trendUp ? 'var(--accent-success)' : 'var(--accent-danger)' }}>
            {trendUp ? '↑' : '↓'} {trend}
          </span>
        )}
      </div>
    </div>
  );
};
