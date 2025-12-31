import "./statistics.css";

const Statistics = ({statisticsObj}) => {
    return (
        <>
            <h1>{statisticsObj.title}</h1>
            <div className="stats-grid">
                 {statisticsObj.statistics.map((stats => 
                    <div className="stat-box" key={stats.value}>
                    <p className="text-center stat-number">{stats.value}</p>
                    <p className="text-center stat-description">{stats.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Statistics;