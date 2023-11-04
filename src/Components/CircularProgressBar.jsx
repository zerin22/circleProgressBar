const CircularProgressBar = (props) => {
    const sqSize = props.sqSize;
    const radius = (sqSize - props.strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * props.percentage / 100;
  
    const gradientId = `progressGradient-${props.percentage}`;
  
    return (

       <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${props.strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${props.strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            stroke: `url(#${gradientId})`, // Apply the linear gradient
          }}
        />
        <text className="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
          {`${props.percentage}%`}
        </text>
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="0%" stopColor="#5E5CE6" />
            <stop offset="1" stopColor="#D255D1" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

    );
  };
  
  CircularProgressBar.defaultProps = {
    sqSize: 200,
    percentage: 25,
    strokeWidth: 10,
  };
  export default CircularProgressBar;