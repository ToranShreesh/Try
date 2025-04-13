import "./style.css"

const Home = ({ title }) => {
    return (<>
        <div className="container">
            <p style={{
                fontSize: "50px",
            }}>
                {title}
            </p>
        </div>
    </>);
}

export default Home;
